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
    const FIELD_LIST = ["approval_by", "created_by", "role_id", "updated_by", "id", "fullname", "username", "password", "email", "telephone", "img_photo_user", "email_verified_at", "last_login_at", "status_code", "approval_at", "approval_description", "created_at", "updated_at"];
    const FIELD_ADD = ["approval_by", "created_by", "role_id", "updated_by", "fullname", "username", "password", "email", "telephone", "img_photo_user", "email_verified_at", "last_login_at", "status_code", "approval_at", "approval_description"];
    const FIELD_EDIT = ["approval_by", "role_id", "updated_by", "fullname", "username", "password", "email", "telephone", "img_photo_user", "email_verified_at", "last_login_at", "status_code", "approval_at", "approval_description"];
    const FIELD_VIEW = ["approval_by", "created_by", "role_id", "updated_by", "id", "fullname", "username", "password", "email", "telephone", "img_photo_user", "email_verified_at", "last_login_at", "status_code", "approval_at", "approval_description", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "approval_by" => [
            "operator" => "=",
        ],
        "created_by" => [
            "operator" => "=",
        ],
        "role_id" => [
            "operator" => "=",
        ],
        "updated_by" => [
            "operator" => "=",
        ],
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
        "approval_description" => [
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
    const FIELD_SORTABLE = ["approval_by", "created_by", "role_id", "updated_by", "id", "fullname", "username", "password", "email", "telephone", "img_photo_user", "email_verified_at", "last_login_at", "status_code", "approval_at", "approval_description", "created_at", "updated_at"];
    const FIELD_UNIQUE = [["email"], ["username"]];
    const FIELD_UPLOAD = ["img_photo_user"];
    const FIELD_TYPE = [
        "approval_by" => "bigint",
        "created_by" => "bigint",
        "role_id" => "bigint",
        "updated_by" => "bigint",
        "id" => "bigint",
        "fullname" => "varchar",
        "username" => "varchar",
        "password" => "text",
        "email" => "varchar",
        "telephone" => "varchar",
        "img_photo_user" => "text",
        "email_verified_at" => "timestamp",
        "last_login_at" => "timestamp",
        "status_code" => "varchar",
        "approval_at" => "timestamp",
        "approval_description" => "text",
        "created_at" => "timestamp",
        "updated_at" => "timestamp",
    ];

    const FIELD_DEFAULT_VALUE = [
        "approval_by" => "NULL",
        "created_by" => "NULL",
        "role_id" => "",
        "updated_by" => "NULL",
        "fullname" => "",
        "username" => "",
        "password" => "",
        "email" => "",
        "telephone" => "NULL",
        "img_photo_user" => "NULL",
        "email_verified_at" => "NULL",
        "last_login_at" => "NULL",
        "status_code" => "NULL",
        "approval_at" => "NULL",
        "approval_description" => "NULL",
        "created_at" => "NULL",
        "updated_at" => "NULL",
    ];
    const FIELD_RELATION = [
        "approval_by" => [
            "linkTable" => "users",
            "aliasTable" => "B",
            "linkField" => "id",
            "displayName" => "rel_approval_by",
            "selectFields" => ["username"],
            "selectValue" => "id AS rel_approval_by"
        ],
        "created_by" => [
            "linkTable" => "users",
            "aliasTable" => "C",
            "linkField" => "id",
            "displayName" => "rel_created_by",
            "selectFields" => ["username"],
            "selectValue" => "id AS rel_created_by"
        ],
        "role_id" => [
            "linkTable" => "roles",
            "aliasTable" => "D",
            "linkField" => "id",
            "displayName" => "rel_role_id",
            "selectFields" => ["role_name"],
            "selectValue" => "id AS rel_role_id"
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
        "approval_by" => "nullable|integer|exists:users,id",
        "created_by" => "nullable|integer|exists:users,id",
        "role_id" => "required|integer|exists:roles,id",
        "updated_by" => "nullable|integer|exists:users,id",
        "fullname" => "required|max:255",
        "username" => "required|max:255",
        "password" => "required|string|max:65535",
        "email" => "required|max:255",
        "telephone" => "nullable|max:255",
        "img_photo_user" => "nullable|string|max:65535|exists_file",
        "email_verified_at" => "nullable|date",
        "last_login_at" => "nullable|date",
        "status_code" => "nullable|max:255",
        "approval_at" => "nullable|date",
        "approval_description" => "nullable|string|max:65535",
        "created_at" => "nullable|date",
        "updated_at" => "nullable|date",
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
