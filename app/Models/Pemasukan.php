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


class Pemasukan extends Model
{
    protected $table = 'pemasukan';
     
    const TABLE = "pemasukan";
    const FILEROOT = "/pemasukan";
    const IS_LIST = true;
    const IS_ADD = true;
    const IS_EDIT = true;
    const IS_DELETE = true;
    const IS_VIEW = true;
    const FIELD_LIST = ["id", "no_pembelian", "tgl_pembelian", "supplier_id", "no_dokumen", "tipe_dokumen", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_ADD = ["no_pembelian", "tgl_pembelian", "supplier_id", "no_dokumen", "tipe_dokumen", "created_by", "updated_by"];
    const FIELD_EDIT = ["no_pembelian", "tgl_pembelian", "supplier_id", "no_dokumen", "tipe_dokumen", "updated_by"];
    const FIELD_VIEW = ["id", "no_pembelian", "tgl_pembelian", "supplier_id", "no_dokumen", "tipe_dokumen", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "id" => [
            "operator" => "=",
        ],
        "no_pembelian" => [
            "operator" => "=",
        ],
        "tgl_pembelian" => [
            "operator" => "=",
        ],
        "supplier_id" => [
            "operator" => "=",
        ],
        "no_dokumen" => [
            "operator" => "=",
        ],
        "tipe_dokumen" => [
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
    const FIELD_SEARCHABLE = ["no_pembelian", "no_dokumen", "tipe_dokumen"];
    const FIELD_ARRAY = [];
    const FIELD_SORTABLE = ["id", "no_pembelian", "tgl_pembelian", "supplier_id", "no_dokumen", "tipe_dokumen", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_UNIQUE = [];
    const FIELD_UPLOAD = [];
    const FIELD_TYPE = [
        "id" => "bigint",
        "no_pembelian" => "character_varying",
        "tgl_pembelian" => "date",
        "supplier_id" => "bigint",
        "no_dokumen" => "character_varying",
        "tipe_dokumen" => "character_varying",
        "created_by" => "bigint",
        "updated_by" => "bigint",
        "created_at" => "timestamp_without_time_zone",
        "updated_at" => "timestamp_without_time_zone",
    ];

    const FIELD_DEFAULT_VALUE = [
        "no_pembelian" => "",
        "tgl_pembelian" => "",
        "supplier_id" => "",
        "no_dokumen" => "",
        "tipe_dokumen" => "",
        "created_by" => "",
        "updated_by" => "",
        "created_at" => "",
        "updated_at" => "",
    ];
    const FIELD_RELATION = [
        "supplier_id" => [
            "linkTable" => "supplier",
            "aliasTable" => "B",
            "linkField" => "id",
            "displayName" => "rel_supplier_id",
            "selectFields" => ["nama"],
            "selectValue" => "id AS rel_supplier_id"
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
        "no_pembelian" => "required|string|max:255",
        "tgl_pembelian" => "required",
        "supplier_id" => "required|integer|exists:supplier,id",
        "no_dokumen" => "required|string|max:255",
        "tipe_dokumen" => "required|string|max:255",
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
        $nama = $input['tipe_dokumen'].$input['no_dokumen'];
        DB::table('kode_group')
        ->where('nama', $nama)
        ->delete();
        return $input;
    }// end custom
}
