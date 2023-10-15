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
    const FIELD_LIST = ["created_by", "pelanggan_id", "updated_by", "id", "no_pembelian", "tgl_pembelian", "no_dokumen", "tipe_dokumen", "no_invoice", "kurs", "created_at", "updated_at"];
    const FIELD_ADD = ["created_by", "pelanggan_id", "updated_by", "no_pembelian", "tgl_pembelian", "no_dokumen", "tipe_dokumen", "no_invoice", "kurs"];
    const FIELD_EDIT = ["pelanggan_id", "updated_by", "no_pembelian", "tgl_pembelian", "no_dokumen", "tipe_dokumen", "no_invoice", "kurs"];
    const FIELD_VIEW = ["created_by", "pelanggan_id", "updated_by", "id", "no_pembelian", "tgl_pembelian", "no_dokumen", "tipe_dokumen", "no_invoice", "kurs", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "created_by" => [
            "operator" => "=",
        ],
        "pelanggan_id" => [
            "operator" => "=",
        ],
        "updated_by" => [
            "operator" => "=",
        ],
        "id" => [
            "operator" => "=",
        ],
        "no_pembelian" => [
            "operator" => "=",
        ],
        "tgl_pembelian" => [
            "operator" => "=",
        ],
        "no_dokumen" => [
            "operator" => "=",
        ],
        "tipe_dokumen" => [
            "operator" => "=",
        ],
        "no_invoice" => [
            "operator" => "=",
        ],
        "kurs" => [
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
    const FIELD_SORTABLE = ["created_by", "pelanggan_id", "updated_by", "id", "no_pembelian", "tgl_pembelian", "no_dokumen", "tipe_dokumen", "no_invoice", "kurs", "created_at", "updated_at"];
    const FIELD_UNIQUE = [];
    const FIELD_UPLOAD = [];
    const FIELD_TYPE = [
        "created_by" => "bigint",
        "pelanggan_id" => "bigint",
        "updated_by" => "bigint",
        "id" => "bigint",
        "no_pembelian" => "varchar",
        "tgl_pembelian" => "date",
        "no_dokumen" => "varchar",
        "tipe_dokumen" => "varchar",
        "no_invoice" => "varchar",
        "kurs" => "int",
        "created_at" => "timestamp",
        "updated_at" => "timestamp",
    ];

    const FIELD_DEFAULT_VALUE = [
        "created_by" => "NULL",
        "pelanggan_id" => "",
        "updated_by" => "NULL",
        "no_pembelian" => "",
        "tgl_pembelian" => "",
        "no_dokumen" => "",
        "tipe_dokumen" => "",
        "no_invoice" => "",
        "kurs" => "",
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
        "pelanggan_id" => [
            "linkTable" => "pelanggan",
            "aliasTable" => "C",
            "linkField" => "id",
            "displayName" => "rel_pelanggan_id",
            "selectFields" => ["nama"],
            "selectValue" => "id AS rel_pelanggan_id"
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
        "pelanggan_id" => "required|integer|exists:pelanggan,id",
        "updated_by" => "nullable|integer|exists:users,id",
        "no_pembelian" => "required|max:255",
        "tgl_pembelian" => "required",
        "no_dokumen" => "required|max:255",
        "tipe_dokumen" => "required|max:255",
        "no_invoice" => "required|max:255",
        "kurs" => "required",
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
