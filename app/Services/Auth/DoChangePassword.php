<?php

namespace App\Services\Auth;

use App\Models\User;
use App\Models\Projects;
use App\Models\Role;
use App\Models\MappingUsersProjects;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\CoreService\CoreException;
use App\CoreService\CoreService;
use App\Mail\MailNotifyPasswordChanged;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class DoChangePassword extends CoreService
{

    public $transaction = false;
    public $task = null;

    public function prepare($input)
    {
        // $user = User::select("users.*", "roles.role_name")->leftjoin('roles', 'roles.id', 'users.role_id')->where("username", $input["username"])->first();
        if (isset($input["code"])) {
            $user = User::select("users.*", "roles.role_name")
                ->leftjoin('roles', 'roles.id', 'users.role_id')
                ->join('user_verify_emails', 'users.id', 'user_verify_emails.user_id')
                ->where('user_verify_emails.uuid', '=', $input["code"])
                ->first();
        } else {
            $user = User::select("users.*", "roles.role_name")->leftjoin('roles', 'roles.id', 'users.role_id')
                ->where(function ($query) use ($input) {
                    $query->orWhere('username', '=', $input["username"])
                        ->orWhere('email', '=', $input["username"]);
                })
                ->first();
        }

        if (empty($user))
            throw new CoreException(__("message.userNotFound", ['username' => $input["username"]]));

        $input["data_user"] = $user;
        return $input;
    }

    public function process($input, $originalInput)
    {
        #+ CHANGE API SSO DATA PROVIDER
        
        $object = $input["data_user"];
        $object->password = password_hash($input["password"], PASSWORD_BCRYPT);
        $object->save();

        #+ SEND EMAIL
        $url = env("APP_URL") . '/#/login';
        $adhiLogoUrl = env("APP_URL") . '/static/img/logo/adhi/720x720.png';
        $qhseLogoUrl = env("APP_URL") . '/static/img/logo/adhi/QHSE_720.png';
        $details = [
            'title' => 'Password Changed - QHSE Adhi v.2 Personal Account',
            'fullname' => $object->fullname,
            'username' => $object->username,
            'password' => $input["password"],
            'ipAddress' => request()->ip(),
            'email' => $object->email,
            'url' => $url,
            'bodyTextEnd' => "Email ini dibuat secara otomatis. Mohon tidak mengirimkan balasan ke email ini.",
            'adhiLogoUrl' => $adhiLogoUrl,
            'qhseLogoUrl' => $qhseLogoUrl
        ];

        if (!is_null($object->email)) {
            // $emailResponse = Mail::to($object->email)->send(new MailNotifyPasswordChanged($details));
        }
        return [
            "data" => $object,
            "message" => __("message.changePasswordSuccess")
        ];
    }

    protected function validation()
    {
        return [
            "password" => "required",
        ];
    }
}
