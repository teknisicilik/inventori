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


class PemasukanDetail extends Model
{
    protected $table = 'pemasukan_detail';

    const TABLE = "pemasukan_detail";
    const FILEROOT = "/pemasukan_detail";
    const IS_LIST = true;
    const IS_ADD = true;
    const IS_EDIT = true;
    const IS_DELETE = true;
    const IS_VIEW = true;
    const FIELD_LIST = ["created_by", "updated_by", "id", "pemasukan_id", "barang_id", "jumlah", "total_nilai", "created_at", "updated_at"];
    const FIELD_ADD = ["created_by", "updated_by", "pemasukan_id", "barang_id", "jumlah", "total_nilai"];
    const FIELD_EDIT = ["updated_by", "pemasukan_id", "barang_id", "jumlah", "total_nilai"];
    const FIELD_VIEW = ["created_by", "updated_by", "id", "pemasukan_id", "barang_id", "jumlah", "total_nilai", "created_at", "updated_at"];
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
        "created_at" => [
            "operator" => "=",
        ],
        "updated_at" => [
            "operator" => "=",
        ],
    ];
    const FIELD_SEARCHABLE = [];
    const FIELD_ARRAY = [];
    const FIELD_SORTABLE = ["created_by", "updated_by", "id", "pemasukan_id", "barang_id", "jumlah", "total_nilai", "created_at", "updated_at"];
    const FIELD_UNIQUE = [];
    const FIELD_UPLOAD = [];
    const FIELD_TYPE = [
        "created_by" => "bigint",
        "updated_by" => "bigint",
        "id" => "bigint",
        "pemasukan_id" => "varchar",
        "barang_id" => "varchar",
        "jumlah" => "int",
        "total_nilai" => "int",
        "created_at" => "timestamp",
        "updated_at" => "timestamp",
    ];

    const FIELD_DEFAULT_VALUE = [
        "created_by" => "NULL",
        "updated_by" => "NULL",
        "pemasukan_id" => "",
        "barang_id" => "",
        "jumlah" => "",
        "total_nilai" => "",
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
        "pemasukan_id" => [
            "linkTable" => "pemasukan",
            "aliasTable" => "D",
            "linkField" => "id",
            "displayName" => "rel_pemasukan",
            "selectFields" => ["no_pembelian"],
            "selectValue" => "id AS rel_pemasukan"
        ],
        "barang_id" => [
            "linkTable" => "barang",
            "aliasTable" => "E",
            "linkField" => "id",
            "displayName" => "rel_barang",
            "selectFields" => ["nama"],
            "selectValue" => "id AS rel_barang"
        ],
    ];
    const CUSTOM_SELECT = "";
    const FIELD_VALIDATION = [
        "created_by" => "nullable|integer|exists:users,id",
        "updated_by" => "nullable|integer|exists:users,id",
        "pemasukan_id" => "required|max:255",
        "barang_id" => "required|max:255",
        "jumlah" => "required",
        "total_nilai" => "required",
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
