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
    const FIELD_LIST = ["created_by", "updated_by", "id", "kategori_barang_id", "kode", "nama", "hs_kode", "satuan", "created_at", "updated_at"];
    const FIELD_ADD = ["created_by", "updated_by", "kategori_barang_id", "kode", "nama", "hs_kode", "satuan"];
    const FIELD_EDIT = ["updated_by", "kategori_barang_id", "kode", "nama", "hs_kode", "satuan"];
    const FIELD_VIEW = ["created_by", "updated_by", "id", "kategori_barang_id", "kode", "nama", "hs_kode", "satuan", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "created_by" => [
            "operator" => "=",
        ],
        "updated_by" => [
            "operator" => "=",
        ],
        "id" => [
            "operator" => "=",
        ],
        "kategori_barang_id" => [
            "operator" => "=",
        ],
        "kode" => [
            "operator" => "=",
        ],
        "nama" => [
            "operator" => "=",
        ],
        "hs_kode" => [
            "operator" => "=",
        ],
        "satuan" => [
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
    const FIELD_SORTABLE = ["created_by", "updated_by", "id", "kategori_barang_id", "kode", "nama", "hs_kode", "satuan", "created_at", "updated_at"];
    const FIELD_UNIQUE = [];
    const FIELD_UPLOAD = [];
    const FIELD_TYPE = [
        "created_by" => "bigint",
        "updated_by" => "bigint",
        "id" => "bigint",
        "kategori_barang_id" => "varchar",
        "kode" => "varchar",
        "nama" => "varchar",
        "hs_kode" => "varchar",
        "satuan" => "varchar",
        "created_at" => "timestamp",
        "updated_at" => "timestamp",
    ];

    const FIELD_DEFAULT_VALUE = [
        "created_by" => "NULL",
        "updated_by" => "NULL",
        "kategori_barang_id" => "",
        "kode" => "",
        "nama" => "",
        "hs_kode" => "",
        "satuan" => "",
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
        "updated_by" => [
            "linkTable" => "users",
            "aliasTable" => "C",
            "linkField" => "id",
            "displayName" => "rel_updated_by",
            "selectFields" => ["username"],
            "selectValue" => "id AS rel_updated_by"
        ],
        "kategori_barang_id" => [
            "linkTable" => "kategori_barang",
            "aliasTable" => "A",
            "linkField" => "id",
            "displayName" => "rel_kategori_barang",
            "selectFields" => ["nama"],
            "selectValue" => "id AS rel_kategori_barang"
        ],
    ];
    const CUSTOM_SELECT = "";
    const FIELD_VALIDATION = [
        "created_by" => "nullable|integer|exists:users,id",
        "updated_by" => "nullable|integer|exists:users,id",
        "kategori_barang_id" => "required|max:255",
        "kode" => "required|max:255",
        "nama" => "required|max:255",
        "hs_kode" => "required|max:255",
        "satuan" => "required|max:255",
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
