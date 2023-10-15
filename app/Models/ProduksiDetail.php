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


class ProduksiDetail extends Model
{
    protected $table = 'produksi_detail';
     
    const TABLE = "produksi_detail";
    const FILEROOT = "/produksi_detail";
    const IS_LIST = true;
    const IS_ADD = true;
    const IS_EDIT = true;
    const IS_DELETE = true;
    const IS_VIEW = true;
    const FIELD_LIST = ["barang_id", "created_by", "produksi_id", "updated_by", "id", "jumlah", "created_at", "updated_at"];
    const FIELD_ADD = ["barang_id", "created_by", "produksi_id", "updated_by", "jumlah"];
    const FIELD_EDIT = ["barang_id", "produksi_id", "updated_by", "jumlah"];
    const FIELD_VIEW = ["barang_id", "created_by", "produksi_id", "updated_by", "id", "jumlah", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "barang_id" => [
            "operator" => "=",
        ],
        "created_by" => [
            "operator" => "=",
        ],
        "produksi_id" => [
            "operator" => "=",
        ],
        "updated_by" => [
            "operator" => "=",
        ],
        "id" => [
            "operator" => "=",
        ],
        "jumlah" => [
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
    const FIELD_SORTABLE = ["barang_id", "created_by", "produksi_id", "updated_by", "id", "jumlah", "created_at", "updated_at"];
    const FIELD_UNIQUE = [];
    const FIELD_UPLOAD = [];
    const FIELD_TYPE = [
        "barang_id" => "bigint",
        "created_by" => "bigint",
        "produksi_id" => "bigint",
        "updated_by" => "bigint",
        "id" => "bigint",
        "jumlah" => "int",
        "created_at" => "timestamp",
        "updated_at" => "timestamp",
    ];

    const FIELD_DEFAULT_VALUE = [
        "barang_id" => "",
        "created_by" => "NULL",
        "produksi_id" => "",
        "updated_by" => "NULL",
        "jumlah" => "",
        "created_at" => "NULL",
        "updated_at" => "NULL",
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
        "produksi_id" => [
            "linkTable" => "produksi",
            "aliasTable" => "D",
            "linkField" => "id",
            "displayName" => "rel_produksi_id",
            "selectFields" => ["id"],
            "selectValue" => "id AS rel_produksi_id"
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
        "barang_id" => "required|integer|exists:barang,id",
        "created_by" => "nullable|integer|exists:users,id",
        "produksi_id" => "required|integer|exists:produksi,id",
        "updated_by" => "nullable|integer|exists:users,id",
        "jumlah" => "required",
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
