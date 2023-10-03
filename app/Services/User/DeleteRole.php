<?php

namespace App\Services\User;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\CoreService\CoreException;
use App\CoreService\CoreService;
use App\Models\Role;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;

class DeleteRole extends CoreService
{

    public $transaction = true;
    public $task = null;

    public function prepare($input)
    {
        $model = 'roles';
        $authRoles = getRoleName(Auth::user()->role_id);
        $permission = "create-" . $model;
        if (!hasPermission($permission))
            throw new CoreException(__("message.forbidden403", ['permission' => $permission, 'role' => $authRoles]), 403);
        
        $role = Role::find($input["id"]);
        if (is_null($role)) {
            throw new CoreException("Role dengan id " . $input["id"] . " tidak ditemukan");
        }
        $input["role"] = $role;
        return $input;
    }

    public function process($input, $originalInput)
    {
        try {
            $input["role"]->delete();
        } catch (QueryException $ex) {
            throw new CoreException(__("message.forbiddenDelete"));
        }
        return [
            "data" => $input["role"],
            "message" => __("message.successfullyDelete")
        ];
    }

    protected function validation()
    {
        return [
            "id" => "required|integer"
        ];
    }
}
