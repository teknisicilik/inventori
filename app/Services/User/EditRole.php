<?php

namespace App\Services\User;

use App\Models\Role;
use Illuminate\Support\Facades\DB;
use App\CoreService\CoreException;
use App\CoreService\CoreService;
use Illuminate\Support\Facades\Auth;

class EditRole extends CoreService
{

    public $transaction = true;
    public $task = null;

    public function prepare($input)
    {
        $model = 'roles';
        $authRoles = getRoleName(Auth::user()->role_id);
        $permission = "update-" . $model;
        if (!hasPermission($permission))
            throw new CoreException(__("message.forbidden403", ['permission' => $permission, 'role' => $authRoles]), 403);
        
        $input["role"] = Role::find($input["id"]);
        if (is_null($input["role"])) {
            throw new CoreException("Role dengan id " . $input["id"] . " tidak ditemukan");
        }
        
        $fieldUnique = [["role_code"],['role_name']];
        if ($fieldUnique) {
            foreach ($fieldUnique as $search) {
                $query = Role::whereRaw("true");
                $fieldTrans = [];
                $uniqueChange = false;
                foreach ($search as $key) {
                    if($input[$key] != $input["role"]->{$key}) {
                        $uniqueChange = true;
                    }
                    $fieldTrans[] = __("field.$key");
                    $query->where($key, $input[$key]);
                };

                if($uniqueChange) {
                    $isi = $query->first();
                    if (!is_null($isi)) {
                        throw new CoreException(__("message.alreadyExist", [ 'field' => implode(",",$fieldTrans)]));
                    }
                }
            }
        }

        return $input;
    }

    public function process($input, $originalInput)
    {
        $role = $input["role"];
        $role->role_code = $input["role_code"];
        $role->role_name = $input["role_name"];
        $role->description = isset($input["description"]) ? $input["description"] : "";
        $role->active = isset($input["active"]) ? $input["active"] : 0;
        
        $role->save();

        return [
            "data" =>$role,
            "message" => __("message.successfullyEdit")
        ];
    }

    protected function validation()
    {
        return [
            "id" => "required|integer",
            "role_code" => "required|max:25",
            "role_name" => "required"
        ];
    }
}
