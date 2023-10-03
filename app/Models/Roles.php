<?php 

namespace App\Models;

use App\CoreService\CallService;
use DateTime;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;


class Roles extends Model
{
    protected $table = 'roles';
     
    const TABLE = "roles";
    const FILEROOT = "/roles";
    const IS_LIST = true;
    const IS_ADD = true;
    const IS_EDIT = true;
    const IS_DELETE = true;
    const IS_VIEW = true;
    const FIELD_LIST = ["role_group_id", "id", "role_code", "role_name", "description", "active", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_ADD = ["role_group_id", "role_code", "role_name", "description", "active", "created_by", "updated_by"];
    const FIELD_EDIT = ["role_group_id", "role_code", "role_name", "description", "active", "updated_by"];
    const FIELD_VIEW = ["role_group_id", "id", "role_code", "role_name", "description", "active", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "role_group_id" => [
            "operator" => "=",
        ],
        "id" => [
            "operator" => "=",
        ],
        "role_code" => [
            "operator" => "=",
        ],
        "role_name" => [
            "operator" => "=",
        ],
        "description" => [
            "operator" => "=",
        ],
        "active" => [
            "operator" => "=",
        ],
        "created_by" => [
            "operator" => "=",
        ],
        "updated_by" => [
            "operator" => "=",
        ],
        "created_at" => [
            "operator" => "=",
        ],
        "updated_at" => [
            "operator" => "=",
        ],
    ];
    const FIELD_SEARCHABLE = [];
    const FIELD_ARRAY = [];
    const FIELD_SORTABLE = ["role_group_id", "id", "role_code", "role_name", "description", "active", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_UNIQUE = [["role_code"]];
    const FIELD_UPLOAD = [];
    const FIELD_TYPE = [
        "role_group_id" => "bigint",
        "id" => "bigint",
        "role_code" => "varchar",
        "role_name" => "varchar",
        "description" => "text",
        "active" => "int",
        "created_by" => "bigint",
        "updated_by" => "bigint",
        "created_at" => "timestamp",
        "updated_at" => "timestamp",
    ];

    const FIELD_DEFAULT_VALUE = [
        "role_group_id" => "NULL",
        "role_code" => "",
        "role_name" => "",
        "description" => "NULL",
        "active" => "1",
        "created_by" => "NULL",
        "updated_by" => "NULL",
        "created_at" => "NULL",
        "updated_at" => "NULL",
    ];
    const FIELD_RELATION = [
        "role_group_id" => [
            "linkTable" => "role_groups",
            "aliasTable" => "B",
            "linkField" => "id",
            "displayName" => "rel_role_group_id",
            "selectFields" => ["role_group_name"],
            "selectValue" => "id AS rel_role_group_id"
        ],
    ];
    const CUSTOM_SELECT = "";
    const FIELD_VALIDATION = [
        "role_group_id" => "nullable|integer|exists:role_groups,id",
        "role_code" => "required|max:255",
        "role_name" => "required|max:255",
        "description" => "nullable|string|max:65535",
        "active" => "nullable",
        "created_by" => "nullable|integer",
        "updated_by" => "nullable|integer",
        "created_at" => "nullable|date",
        "updated_at" => "nullable|date",
    ];
    const PARENT_CHILD = [];
    // start custom
    const CUSTOM_LIST_FILTER = [];
    const FIELD_CASTING = [
        //"nama field" => "float",
    ];
    const CHILD_TABLE = [
        //"child_table" => [
        //    "foreignField" => "field"
        //]
    ];

    public static function beforeInsert($input)
    {
        return $input;
    }

    public static function afterInsert($object, $input)
    {
        return $input;
    }

    public static function beforeUpdate($input)
    {
        return $input;
    }

    public static function afterUpdate($object, $input)
    {
        return $input;
    }

    public static function beforeDelete($input)
    {
        return $input;
    }

    public static function afterDelete($object, $input)
    {
        return $input;
    } // end custom
}
