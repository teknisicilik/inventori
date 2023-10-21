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


class Users extends Model
{
    protected $table = 'users';
     
    const TABLE = "users";
    const FILEROOT = "/users";
    const IS_LIST = true;
    const IS_ADD = true;
    const IS_EDIT = true;
    const IS_DELETE = true;
    const IS_VIEW = true;
    const FIELD_LIST = ["id", "fullname", "username", "password", "email", "telephone", "img_photo_user", "role_id", "email_verified_at", "last_login_at", "status_code", "approval_at", "approval_by", "approval_description", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_ADD = ["fullname", "username", "password", "email", "telephone", "img_photo_user", "role_id", "email_verified_at", "last_login_at", "status_code", "approval_at", "approval_by", "approval_description", "created_by", "updated_by"];
    const FIELD_EDIT = ["fullname", "username", "password", "email", "telephone", "img_photo_user", "role_id", "email_verified_at", "last_login_at", "status_code", "approval_at", "approval_by", "approval_description", "updated_by"];
    const FIELD_VIEW = ["id", "fullname", "username", "password", "email", "telephone", "img_photo_user", "role_id", "email_verified_at", "last_login_at", "status_code", "approval_at", "approval_by", "approval_description", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "id" => [
            "operator" => "=",
        ],
        "fullname" => [
            "operator" => "=",
        ],
        "username" => [
            "operator" => "=",
        ],
        "password" => [
            "operator" => "=",
        ],
        "email" => [
            "operator" => "=",
        ],
        "telephone" => [
            "operator" => "=",
        ],
        "img_photo_user" => [
            "operator" => "=",
        ],
        "role_id" => [
            "operator" => "=",
        ],
        "email_verified_at" => [
            "operator" => "=",
        ],
        "last_login_at" => [
            "operator" => "=",
        ],
        "status_code" => [
            "operator" => "=",
        ],
        "approval_at" => [
            "operator" => "=",
        ],
        "approval_by" => [
            "operator" => "=",
        ],
        "approval_description" => [
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
    const FIELD_SEARCHABLE = ["fullname", "username", "email", "telephone"];
    const FIELD_ARRAY = [];
    const FIELD_SORTABLE = ["id", "fullname", "username", "password", "email", "telephone", "img_photo_user", "role_id", "email_verified_at", "last_login_at", "status_code", "approval_at", "approval_by", "approval_description", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_UNIQUE = [["email"], ["username"]];
    const FIELD_UPLOAD = ["img_photo_user"];
    const FIELD_TYPE = [
        "id" => "bigint",
        "fullname" => "character_varying",
        "username" => "character_varying",
        "password" => "text",
        "email" => "character_varying",
        "telephone" => "character_varying",
        "img_photo_user" => "text",
        "role_id" => "bigint",
        "email_verified_at" => "timestamp_with_time_zone",
        "last_login_at" => "timestamp_with_time_zone",
        "status_code" => "character_varying",
        "approval_at" => "timestamp_with_time_zone",
        "approval_by" => "bigint",
        "approval_description" => "text",
        "created_by" => "bigint",
        "updated_by" => "bigint",
        "created_at" => "timestamp_without_time_zone",
        "updated_at" => "timestamp_without_time_zone",
    ];

    const FIELD_DEFAULT_VALUE = [
        "fullname" => "",
        "username" => "",
        "password" => "",
        "email" => "",
        "telephone" => "",
        "img_photo_user" => "",
        "role_id" => "",
        "email_verified_at" => "",
        "last_login_at" => "",
        "status_code" => "",
        "approval_at" => "",
        "approval_by" => "",
        "approval_description" => "",
        "created_by" => "",
        "updated_by" => "",
        "created_at" => "",
        "updated_at" => "",
    ];
    const FIELD_RELATION = [
        "role_id" => [
            "linkTable" => "roles",
            "aliasTable" => "B",
            "linkField" => "id",
            "displayName" => "rel_role_id",
            "selectFields" => ["role_name"],
            "selectValue" => "id AS rel_role_id"
        ],
        "approval_by" => [
            "linkTable" => "users",
            "aliasTable" => "C",
            "linkField" => "id",
            "displayName" => "rel_approval_by",
            "selectFields" => ["username"],
            "selectValue" => "id AS rel_approval_by"
        ],
        "created_by" => [
            "linkTable" => "users",
            "aliasTable" => "D",
            "linkField" => "id",
            "displayName" => "rel_created_by",
            "selectFields" => ["username"],
            "selectValue" => "id AS rel_created_by"
        ],
        "updated_by" => [
            "linkTable" => "users",
            "aliasTable" => "E",
            "linkField" => "id",
            "displayName" => "rel_updated_by",
            "selectFields" => ["username"],
            "selectValue" => "id AS rel_updated_by"
        ],
    ];
    const CUSTOM_SELECT = "";
    const FIELD_VALIDATION = [
        "fullname" => "required|string|max:255",
        "username" => "required|string|max:255",
        "password" => "required|string",
        "email" => "required|string|max:255",
        "telephone" => "nullable|string|max:255",
        "img_photo_user" => "nullable|string|exists_file",
        "role_id" => "required|integer|exists:roles,id",
        "email_verified_at" => "nullable|date",
        "last_login_at" => "nullable|date",
        "status_code" => "nullable|string|max:255",
        "approval_at" => "nullable|date",
        "approval_by" => "nullable|integer|exists:users,id",
        "approval_description" => "nullable|string",
        "created_by" => "nullable|integer|exists:users,id",
        "updated_by" => "nullable|integer|exists:users,id",
        "created_at" => "nullable",
        "updated_at" => "nullable",
    ];
    const PARENT_CHILD = [];
    // start custom
    protected $casts = [
        'last_login_at' => 'datetime:Y-m-d H:i',
    ];

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
