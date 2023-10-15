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


class Produksi extends Model
{
    protected $table = 'produksi';

    const TABLE = "produksi";
    const FILEROOT = "/produksi";
    const IS_LIST = true;
    const IS_ADD = true;
    const IS_EDIT = true;
    const IS_DELETE = true;
    const IS_VIEW = true;
    const FIELD_LIST = ["created_by", "kode_group_id", "updated_by", "id", "no_produksi", "tgl_produksi", "created_at", "updated_at"];
    const FIELD_ADD = ["created_by", "kode_group_id", "updated_by", "no_produksi", "tgl_produksi"];
    const FIELD_EDIT = ["kode_group_id", "updated_by", "no_produksi", "tgl_produksi"];
    const FIELD_VIEW = ["created_by", "kode_group_id", "updated_by", "id", "no_produksi", "tgl_produksi", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "created_by" => [
            "operator" => "=",
        ],
        "kode_group_id" => [
            "operator" => "=",
        ],
        "updated_by" => [
            "operator" => "=",
        ],
        "id" => [
            "operator" => "=",
        ],
        "no_produksi" => [
            "operator" => "=",
        ],
        "tgl_produksi" => [
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
    const FIELD_SORTABLE = ["created_by", "kode_group_id", "updated_by", "id", "no_produksi", "tgl_produksi", "created_at", "updated_at"];
    const FIELD_UNIQUE = [];
    const FIELD_UPLOAD = [];
    const FIELD_TYPE = [
        "created_by" => "bigint",
        "kode_group_id" => "bigint",
        "updated_by" => "bigint",
        "id" => "bigint",
        "no_produksi" => "varchar",
        "tgl_produksi" => "date",
        "created_at" => "timestamp",
        "updated_at" => "timestamp",
    ];

    const FIELD_DEFAULT_VALUE = [
        "created_by" => "NULL",
        "kode_group_id" => "",
        "updated_by" => "NULL",
        "no_produksi" => "",
        "tgl_produksi" => "",
        "created_at" => "NULL",
        "updated_at" => "NULL",
    ];
    const FIELD_RELATION = [
        "created_by" => [
            "linkTable" => "users",
            "aliasTable" => "B",
            "linkField" => "id",
            "displayName" => "rel_created_by",
            "selectFields" => ["username"],
            "selectValue" => "id AS rel_created_by"
        ],
        "kode_group_id" => [
            "linkTable" => "kode_group",
            "aliasTable" => "C",
            "linkField" => "id",
            "displayName" => "rel_kode_group_id",
            "selectFields" => ["barang_id"],
            "selectValue" => "id AS rel_kode_group_id"
        ],
        "updated_by" => [
            "linkTable" => "users",
            "aliasTable" => "D",
            "linkField" => "id",
            "displayName" => "rel_updated_by",
            "selectFields" => ["username"],
            "selectValue" => "id AS rel_updated_by"
        ],
    ];
    const CUSTOM_SELECT = "";
    const FIELD_VALIDATION = [
        "created_by" => "nullable|integer|exists:users,id",
        "kode_group_id" => "required|integer|exists:kode_group,id",
        "updated_by" => "nullable|integer|exists:users,id",
        "no_produksi" => "required|max:255",
        "tgl_produksi" => "required",
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
