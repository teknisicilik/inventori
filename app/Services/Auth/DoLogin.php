<?php

namespace App\Services\Auth;

use Illuminate\Support\Facades\DB;
use App\CoreService\CoreException;
use App\CoreService\CoreService;
use App\Models\User;
use App\Models\Users;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class DoLogin extends CoreService
{

    public $transaction = false;
    public $permission = null;

    public function prepare($input)
    {

        return $input;
    }

    public function process($input, $originalInput)
    {

        $credentials = [
            "username" => $input["username"],
            "password" => $input["password"]
        ];

        $user = Users::select("users.*", "roles.role_name", "roles.role_group_id")->leftjoin('roles', 'roles.id', 'users.role_id')
            ->where(function ($query) use ($input) {
                $query->orWhere('username', '=', $input["username"])
                    ->orWhere('email', '=', $input["username"]);
            })
            ->first();

        if (empty($user))
            throw new CoreException(__("message.userNotFound", ['username' => $input["username"]]), 422);

        $fieldType = filter_var($credentials["username"], FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        if (Config::get("auth.defaults.guard") == "web") {
            if ($token = !Auth::attempt(array($fieldType => $input['username'], 'password' => $input['password']))) {
                throw new CoreException(__("message.loginCredentialFalse"), 422);
            }
            Auth::loginUsingId($user->id);
            $token = null;
        } else {
            if ($token = Auth::attempt(array($fieldType => $input['username'], 'password' => $input['password']))) {
            } else {
                throw new CoreException(__("message.loginCredentialFalse"), 422);
            }
        }

        $data_user_before_login["fullname"] = $user->fullname;
        $data_user_before_login["username"] = $user->username;
        $data_user_before_login["email"] = $user->email;
        $data_user_before_login["rel_role_id"] = $user->role_name;
        $data_user_before_login["status_code"] = $user->status_code;
        $response = [];
        if ($user->status_code == 'email_unverified') {
            $response["message"] = __("message.userEmailNotVerifiedYet", ['email' => $user->email]);
            $response["data_user_before_login"] = $data_user_before_login;
            return $response;
        }

        if ($user->status_code == 'email_verified') {
            $response["message"] = __("message.userEmailVerifiedWaitingApproval", ['email' => $user->email]);
            $response["data_user_before_login"] = $data_user_before_login;
            return $response;
        }

        if ($user->status_code == 'user_rejected') {
            $response["message"] = __("message.userRejectedByAdmin", ['username' => $user->username]);
            $response["data_user_before_login"] = $data_user_before_login;
            return $response;
        }

        if ($user->status_code == 'user_nonactive') {
            $response["message"] = __("message.userNotActive", ['username' => $user->username]);
            $response["data_user_before_login"] = $data_user_before_login;
            return $response;
        }

        if ($user->status_code != 'user_active') {
            $response["message"] = __("message.userNotActive", ['username' => $user->username]);
            $response["data_user_before_login"] = $data_user_before_login;
            return $response;
        }
        /*
        | PERMISSION
        */
        $sql = "SELECT B.permission_code FROM mapping_roles_permissions A
            INNER JOIN permissions B ON B.id = A.permission_id
            INNER JOIN users C ON C.role_id = A.role_id AND C.id = ? WHERE A.active = 1";

        $permissionList =  array_map(function ($item) {
            return $item->permission_code;
        }, DB::select($sql, [$user->id]));

        // FOR IMG PHOTO CREATED BY


        // if (property_exists($user, 'img_photo_user')) {
        //     $url = URL::to('api/file/users/img_photo_user/' . $user->created_by . '/' . time());
        //     $tumbnailUrl = URL::to('api/tumb-file/users/img_photo_user/' . $user->created_by . '/' . time());
        //     $user->img_photo_created_by = (object) [
        //         "url" => $url,
        //         "tumbnail_url" => $tumbnailUrl,
        //     ];
        // }

        // END FOR IMG PHOTO CREATED BY

        // REMOVE SOME PROPERTY OF OBJECT
        unset($user->password);
        // END REMOVE PROPERTY OF OBJECT


        #+ UPDATE LAST LOGIN
        $user->last_login_at = Carbon::now()->format('Y-m-d h:i');
        $user->save();

        return [
            "user" => $user,
            "token" => $token,
            "permissions" => $permissionList,
            "message" => __("message.loginSuccess")
        ];
    }

    protected function validation()
    {
        return [
            "username" => "required",
            "password" => "required"
        ];
    }
}
