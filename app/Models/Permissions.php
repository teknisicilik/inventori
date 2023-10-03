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


class Permissions extends Model
{
    protected $table = 'permissions';
     
    const TABLE = "permissions";
    const FILEROOT = "/permissions";
    const IS_LIST = true;
    const IS_ADD = true;
    const IS_EDIT = true;
    const IS_DELETE = true;
    const IS_VIEW = true;
    const FIELD_LIST = ["id", "permission_code", "permission_name", "permission_group", "application", "description", "active", "created_at", "updated_at"];
    const FIELD_ADD = ["permission_code", "permission_name", "permission_group", "application", "description", "active"];
    const FIELD_EDIT = ["permission_code", "permission_name", "permission_group", "application", "description", "active"];
    const FIELD_VIEW = ["id", "permission_code", "permission_name", "permission_group", "application", "description", "active", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "id" => [
            "operator" => "=",
        ],
        "permission_code" => [
            "operator" => "=",
        ],
        "permission_name" => [
            "operator" => "=",
        ],
        "permission_group" => [
            "operator" => "=",
        ],
        "application" => [
            "operator" => "=",
        ],
        "description" => [
            "operator" => "=",
        ],
        "active" => [
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
    const FIELD_SORTABLE = ["id", "permission_code", "permission_name", "permission_group", "application", "description", "active", "created_at", "updated_at"];
    const FIELD_UNIQUE = [["permission_code"]];
    const FIELD_UPLOAD = [];
    const FIELD_TYPE = [
        "id" => "bigint",
        "permission_code" => "varchar",
        "permission_name" => "varchar",
        "permission_group" => "varchar",
        "application" => "varchar",
        "description" => "text",
        "active" => "int",
        "created_at" => "timestamp",
        "updated_at" => "timestamp",
    ];

    const FIELD_DEFAULT_VALUE = [
        "permission_code" => "",
        "permission_name" => "",
        "permission_group" => "NULL",
        "application" => "NULL",
        "description" => "",
        "active" => "1",
        "created_at" => "NULL",
        "updated_at" => "NULL",
    ];
    const FIELD_RELATION = [
    ];
    const CUSTOM_SELECT = "";
    const FIELD_VALIDATION = [
        "permission_code" => "required|max:100",
        "permission_name" => "required|max:200",
        "permission_group" => "nullable|max:200",
        "application" => "nullable|max:200",
        "description" => "required|string|max:65535",
        "active" => "nullable",
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
    }// end custom
}
