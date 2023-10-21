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


class Barang extends Model
{
    protected $table = 'barang';
     
    const TABLE = "barang";
    const FILEROOT = "/barang";
    const IS_LIST = true;
    const IS_ADD = true;
    const IS_EDIT = true;
    const IS_DELETE = true;
    const IS_VIEW = true;
    const FIELD_LIST = ["id", "kategori_barang_id", "kode_barang", "nama", "satuan", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_ADD = ["kategori_barang_id", "kode_barang", "nama", "satuan", "created_by", "updated_by"];
    const FIELD_EDIT = ["kategori_barang_id", "kode_barang", "nama", "satuan", "updated_by"];
    const FIELD_VIEW = ["id", "kategori_barang_id", "kode_barang", "nama", "satuan", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "id" => [
            "operator" => "=",
        ],
        "kategori_barang_id" => [
            "operator" => "=",
        ],
        "kode_barang" => [
            "operator" => "=",
        ],
        "nama" => [
            "operator" => "=",
        ],
        "satuan" => [
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
    const FIELD_SEARCHABLE = ["kode_barang", "nama", "satuan"];
    const FIELD_ARRAY = [];
    const FIELD_SORTABLE = ["id", "kategori_barang_id", "kode_barang", "nama", "satuan", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_UNIQUE = [];
    const FIELD_UPLOAD = [];
    const FIELD_TYPE = [
        "id" => "bigint",
        "kategori_barang_id" => "bigint",
        "kode_barang" => "character_varying",
        "nama" => "character_varying",
        "satuan" => "character_varying",
        "created_by" => "bigint",
        "updated_by" => "bigint",
        "created_at" => "timestamp_without_time_zone",
        "updated_at" => "timestamp_without_time_zone",
    ];

    const FIELD_DEFAULT_VALUE = [
        "kategori_barang_id" => "",
        "kode_barang" => "",
        "nama" => "",
        "satuan" => "",
        "created_by" => "",
        "updated_by" => "",
        "created_at" => "",
        "updated_at" => "",
    ];
    const FIELD_RELATION = [
        "kategori_barang_id" => [
            "linkTable" => "kategori_barang",
            "aliasTable" => "B",
            "linkField" => "id",
            "displayName" => "rel_kategori_barang_id",
            "selectFields" => ["nama"],
            "selectValue" => "id AS rel_kategori_barang_id"
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
        "kategori_barang_id" => "required|integer|exists:kategori_barang,id",
        "kode_barang" => "required|string|max:255",
        "nama" => "required|string|max:255",
        "satuan" => "required|string|max:255",
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
