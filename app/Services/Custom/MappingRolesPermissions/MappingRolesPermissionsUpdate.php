<?php

namespace App\Services\Custom\MappingRolesPermissions;

use App\CoreService\CoreException;
use Illuminate\Support\Facades\DB;
use App\CoreService\CoreService;
use Illuminate\Support\Facades\Auth;

class MappingRolesPermissionsUpdate extends CoreService
{

    public $transaction = true;
    public $permission = null;

    public function prepare($input)
    {
        $authRoles = getRoleName(Auth::user()->role_id);
        $permission = "update-mapping-roles-permissions";
        if (!hasPermission($permission))
            throw new CoreException(__("message.forbidden403", ['permission' => $permission, 'role' => $authRoles]), 403);
        
        return $input;
    }

    public function process($input, $originalInput)
    {
        $roleId = $input["role_id"];
        $permissionId = $input["permission_id"];
        $valueMapping = $input["active"];
        $mappingExists = DB::selectOne("SELECT * FROM mapping_roles_permissions WHERE role_id = :role_id AND permission_id = :permission_id", ["role_id" => $roleId, "permission_id" => $permissionId]);
        $value = '';
        if($valueMapping == 1){
            $value = 'Mengaktifkan';
        }else{
            $value = 'Menonaktifkan';
        }
        if (!$mappingExists) {
            $permissionInput[] = [
                "role_id" => $roleId,
                "permission_id" =>  $permissionId,
                "active" => 1,
                "created_at" => now(),
                "updated_at" => now()
            ];
            DB::table("mapping_roles_permissions")->insert($permissionInput);
        } else {
            DB::table('mapping_roles_permissions')
                ->where('role_id', $roleId)
                ->where('permission_id', $permissionId)
                ->update([
                    'active' => $valueMapping,
                    'updated_at' => now()
                ]);
        }

        return [
            "message" => __("message.successfullyUpdatePermission", ['value' => $value])
        ];
    }

    protected function validation()
    {
        return [
            "role_id" => "required",
            "permission_id" => "required",
        ];
    }
}
