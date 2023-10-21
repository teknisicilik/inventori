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


class BatalProduksi extends Model
{
    protected $table = 'batal_produksi';
     
    const TABLE = "batal_produksi";
    const FILEROOT = "/batal_produksi";
    const IS_LIST = true;
    const IS_ADD = true;
    const IS_EDIT = true;
    const IS_DELETE = true;
    const IS_VIEW = true;
    const FIELD_LIST = ["id", "no_produksi", "tgl_produksi", "kode_group_id", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_ADD = ["no_produksi", "tgl_produksi", "kode_group_id", "created_by", "updated_by"];
    const FIELD_EDIT = ["no_produksi", "tgl_produksi", "kode_group_id", "updated_by"];
    const FIELD_VIEW = ["id", "no_produksi", "tgl_produksi", "kode_group_id", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "id" => [
            "operator" => "=",
        ],
        "no_produksi" => [
            "operator" => "=",
        ],
        "tgl_produksi" => [
            "operator" => "=",
        ],
        "kode_group_id" => [
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
    const FIELD_SEARCHABLE = ["no_produksi"];
    const FIELD_ARRAY = [];
    const FIELD_SORTABLE = ["id", "no_produksi", "tgl_produksi", "kode_group_id", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_UNIQUE = [];
    const FIELD_UPLOAD = [];
    const FIELD_TYPE = [
        "id" => "bigint",
        "no_produksi" => "character_varying",
        "tgl_produksi" => "date",
        "kode_group_id" => "bigint",
        "created_by" => "bigint",
        "updated_by" => "bigint",
        "created_at" => "timestamp_without_time_zone",
        "updated_at" => "timestamp_without_time_zone",
    ];

    const FIELD_DEFAULT_VALUE = [
        "no_produksi" => "",
        "tgl_produksi" => "",
        "kode_group_id" => "",
        "created_by" => "",
        "updated_by" => "",
        "created_at" => "",
        "updated_at" => "",
    ];
    const FIELD_RELATION = [
        "kode_group_id" => [
            "linkTable" => "kode_group",
            "aliasTable" => "B",
            "linkField" => "id",
            "displayName" => "rel_kode_group_id",
            "selectFields" => ["nama"],
            "selectValue" => "id AS rel_kode_group_id"
        ],
        "created_by" => [
            "linkTable" => "users",
            "aliasTable" => "C",
            "linkField" => "id",
            "displayName" => "rel_created_by",
            "selectFields" => ["username"],
            "selectValue" => "id AS rel_created_by"
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
        "no_produksi" => "required|string|max:255",
        "tgl_produksi" => "required",
        "kode_group_id" => "required|integer|exists:kode_group,id",
        "created_by" => "nullable|integer|exists:users,id",
        "updated_by" => "nullable|integer|exists:users,id",
        "created_at" => "nullable",
        "updated_at" => "nullable",
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
