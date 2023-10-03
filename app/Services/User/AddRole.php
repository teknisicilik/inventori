<?php

namespace App\Services\User;

use App\Models\Role;
use Illuminate\Support\Facades\DB;
use App\CoreService\CoreException;
use App\CoreService\CoreService;
use Illuminate\Support\Facades\Auth;

class AddRole extends CoreService
{

    public $transaction = true;
    public $task = null;

    public function prepare($input)
    {
        $authRoles = getRoleName(Auth::user()->role_id);
        $permission = "create-roles";
        if (!hasPermission($permission))
            throw new CoreException(__("message.forbidden403", ['permission' => $permission, 'role' => $authRoles]), 403);
        
        $role_codeExists = DB::selectOne("SELECT 1 FROM roles WHERE role_code = :role_code", ["role_code" => $input["role_code"]]);
        if (!is_null($role_codeExists)) {
            throw new CoreException("Role dengan kode " . $input["role_code"] . " sudah ada");
        }

        return $input;
    }

    public function process($input, $originalInput)
    {
        $user = new Role;
        $user->role_code = $input["role_code"];
        $user->role_name = $input["role_name"];
        $user->description = isset($input["description"]) ? $input["description"] : "";
        $user->active = isset($input["active"]) ? $input["active"] : 0;
        $user->save();
        return [
            "data" =>$user,
            "message" => __("message.successfullyAdd")
        ];
    }

    protected function validation()
    {
        return [
            "role_code" => "required|max:25",
            "role_name" => "required"
        ];
    }
}
