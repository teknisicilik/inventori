<?php

namespace App\Services\User;

use App\Models\Users;
use Illuminate\Support\Facades\DB;
use App\CoreService\CoreException;
use App\CoreService\CoreService;
use Illuminate\Support\Facades\Auth;

class ActiveDeactiveUser extends CoreService
{

    public $transaction = true;
    public $task = null;

    public function prepare($input)
    {
        $user = Users::find($input["id"]);
        $authRoles = getRoleName(Auth::user()->role_id);
        $permission = "user-active-deactive";
        if (is_null($user)) {
            throw new CoreException("Pengguna tidak ditemukan");
        }
        if (!hasPermission($permission))
            throw new CoreException(__("message.forbidden403", ['permission' => $permission, 'role' => $authRoles]), 403);
        $input["user"] = $user;
        return $input;
    }

    public function process($input, $originalInput)
    {

        $input["user"]->status_code = $input["status_code"];
        $input["user"]->save();

        $msg = $input["status_code"];
        if($input["status_code"] == 'user_active'){
            $msg = __("message.successfullyRestoreUser");
        }else if($input["status_code"] == 'user_nonactive'){
            $msg = __("message.successfullyRemoveUser");
        }
        return [
            "data" => $input["user"],
            "message" => $msg
        ];
    }

    protected function validation()
    {
        return [
            "id" => "required|integer",
            "status_code" => "required"
        ];
    }
}
