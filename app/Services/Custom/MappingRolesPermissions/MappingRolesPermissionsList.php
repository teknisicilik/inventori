<?php

namespace App\Services\Custom\MappingRolesPermissions;

use Illuminate\Support\Facades\DB;
use App\CoreService\CoreException;
use App\CoreService\CoreService;
use Illuminate\Support\Str;

class MappingRolesPermissionsList extends CoreService
{

    public $transaction = false;
    public $permission = null;

    public function prepare($input)
    {
        $modelPermission = 'permissions';
        $classModelPermission = "\\App\\Models\\" . Str::ucfirst(Str::camel($modelPermission));
        if (!class_exists($classModelPermission))
            throw new CoreException(__("message.model404", ['model' => $modelPermission]), 404);

        $input["class_model_permission"] = $classModelPermission;
        return $input;
    }

    public function process($input, $originalInput)
    {
        $classModelPermission = $input["class_model_permission"];
        $sortBy = $classModelPermission::TABLE . ".permission_group, " . $classModelPermission::TABLE . ".id";
        $sort = "ASC";


        $condition = "WHERE true";
        $params = [];

        if (!is_blank($input, "search")) {

            $searchableList = ["permission_code", "permission_name", "description"];

            $searchableList = array_map(function ($item) {
                return "UPPER($item) ILIKE :search";
            }, $searchableList);
        } else {
            $searchableList = [];
        }

        //// FILTER permission
        $filterListPermission = [];

        foreach ($classModelPermission::FIELD_FILTERABLE as $filter => $operator) {
            if (!is_blank($input, $filter)) {
                if ($filter == 'active') {
                    $params[$filter] = $input[$filter];
                } else {
                    $filterListPermission[] = " AND " . $classModelPermission::TABLE . "." . $filter .  " " . $operator["operator"] . " :$filter";
                    $params[$filter] = $input[$filter];
                }
            }
        }
        if (!is_blank($input, "active") and !is_blank($input, "role_id")) {
            $params["active"] = $input["active"];
            if ($input["active"] == '1') {
                $condition = $condition . " AND EXISTS (SELECT 1 FROM mapping_roles_permissions WHERE permission_id = permissions.id AND active = :active AND role_id = " . $input["role_id"] . " )";
            } else {
                $condition = $condition . " AND NOT EXISTS (SELECT 1 FROM mapping_roles_permissions WHERE permission_id = permissions.id AND role_id = " . $input["role_id"] . " ) " . " OR EXISTS (SELECT 1 FROM mapping_roles_permissions WHERE permission_id = permissions.id AND active = :active AND role_id = " . $input["role_id"] . " )";
            }
        };

        if (count($searchableList) > 0 && !is_blank($input, "search"))
            $params["search"] = "%" . strtoupper($input["search"] ?? "") . "%";

        $limit = $input["limit"] ?? 10;
        $offset = $input["offset"] ?? 0;
        if (!is_null($input["page"] ?? null)) {
            $offset = $limit * ($input["page"] - 1);
        }
        $sql = "SELECT * FROM permissions " . $condition . " " . (count($searchableList) > 0 ? " AND (" . implode(" OR ", $searchableList) . ")" : "") .
            implode("\n", $filterListPermission) .
            " ORDER BY " . $sortBy . " " . $sort . " LIMIT $limit OFFSET $offset ";
        $sqlForCountPermission = "SELECT COUNT(1) AS total FROM permissions " . $condition .
            (count($searchableList) > 0 ? " AND (" . implode(" OR ", $searchableList) . ")" : "") .
            implode("\n", $filterListPermission);

        $permissions = DB::select($sql, $params);
        ///////////////
        $paramsRoles = [];
        $conditionRoles = "WHERE true";
        if (!is_blank($input, "role_id")) {
            $conditionRoles = $conditionRoles . " AND id = :role_id";
            $paramsRoles["role_id"] = $input["role_id"];
        };
        $sqlRoles = "SELECT * FROM roles " . $conditionRoles;

        //////////////
        $roles = DB::select($sqlRoles, $paramsRoles);
        $rolePermissionList = [];
        foreach (DB::select("SELECT * FROM mapping_roles_permissions") as $rolePermission) {
            $rolePermissionList[$rolePermission->role_id][$rolePermission->permission_id] = $rolePermission->active;
        }
        $result = [];
        $i = 0;

        $totalPermission = DB::selectOne($sqlForCountPermission, $params)->total;

        //
        foreach ($roles as $role) {
            $result[$i] = [
                "id" => $role->id,
                "role_code" => $role->role_code,
                "role_name" => $role->role_name,
                "description" => $role->description,
                "data" => [],
                "total" => $totalPermission
            ];
            foreach ($permissions as $permission) {
                $dataPermission = (object) [
                    "id" => $permission->id,
                    "permission_code" => $permission->permission_code,
                    "permission_name" => $permission->permission_name,
                    "permission_group" => $permission->permission_group,
                    "description" => $permission->description,
                    "active" => isset($rolePermissionList[$role->id][$permission->id]) ? $rolePermissionList[$role->id][$permission->id] : 0
                ];
                array_push($result[$i]["data"], $dataPermission);
            }
            $i++;
        }
        //
        $totalPage = ceil($totalPermission / $limit);

        return [
            "data" => $result,
            "total" => $totalPermission,
            "totalPage" => $totalPage
        ];
    }

    protected function validation()
    {
        return [];
    }
}
