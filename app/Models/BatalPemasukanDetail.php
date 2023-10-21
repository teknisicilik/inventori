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


class BatalPemasukanDetail extends Model
{
    protected $table = 'batal_pemasukan_detail';
     
    const TABLE = "batal_pemasukan_detail";
    const FILEROOT = "/batal_pemasukan_detail";
    const IS_LIST = true;
    const IS_ADD = true;
    const IS_EDIT = true;
    const IS_DELETE = true;
    const IS_VIEW = true;
    const FIELD_LIST = ["id", "pemasukan_id", "barang_id", "jumlah", "total_nilai", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_ADD = ["pemasukan_id", "barang_id", "jumlah", "total_nilai", "created_by", "updated_by"];
    const FIELD_EDIT = ["pemasukan_id", "barang_id", "jumlah", "total_nilai", "updated_by"];
    const FIELD_VIEW = ["id", "pemasukan_id", "barang_id", "jumlah", "total_nilai", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "id" => [
            "operator" => "=",
        ],
        "pemasukan_id" => [
            "operator" => "=",
        ],
        "barang_id" => [
            "operator" => "=",
        ],
        "jumlah" => [
            "operator" => "=",
        ],
        "total_nilai" => [
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
    const FIELD_SORTABLE = ["id", "pemasukan_id", "barang_id", "jumlah", "total_nilai", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_UNIQUE = [];
    const FIELD_UPLOAD = [];
    const FIELD_TYPE = [
        "id" => "bigint",
        "pemasukan_id" => "integer",
        "barang_id" => "bigint",
        "jumlah" => "integer",
        "total_nilai" => "integer",
        "created_by" => "bigint",
        "updated_by" => "bigint",
        "created_at" => "timestamp_without_time_zone",
        "updated_at" => "timestamp_without_time_zone",
    ];

    const FIELD_DEFAULT_VALUE = [
        "pemasukan_id" => "",
        "barang_id" => "",
        "jumlah" => "",
        "total_nilai" => "",
        "created_by" => "",
        "updated_by" => "",
        "created_at" => "",
        "updated_at" => "",
    ];
    const FIELD_RELATION = [
        "barang_id" => [
            "linkTable" => "barang",
            "aliasTable" => "B",
            "linkField" => "id",
            "displayName" => "rel_barang_id",
            "selectFields" => ["nama"],
            "selectValue" => "id AS rel_barang_id"
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
        "pemasukan_id" => "required|integer",
        "barang_id" => "required|integer|exists:barang,id",
        "jumlah" => "required|integer",
        "total_nilai" => "required|integer",
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
