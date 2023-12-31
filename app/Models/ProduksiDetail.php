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
    const FIELD_LIST = ["id", "produksi_id", "barang_id", "jumlah", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_ADD = ["produksi_id", "barang_id", "jumlah", "created_by", "updated_by"];
    const FIELD_EDIT = ["produksi_id", "barang_id", "jumlah", "updated_by"];
    const FIELD_VIEW = ["id", "produksi_id", "barang_id", "jumlah", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_READONLY = [];
    const FIELD_FILTERABLE = [
        "id" => [
            "operator" => "=",
        ],
        "produksi_id" => [
            "operator" => "=",
        ],
        "barang_id" => [
            "operator" => "=",
        ],
        "jumlah" => [
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
    const FIELD_SORTABLE = ["id", "produksi_id", "barang_id", "jumlah", "created_by", "updated_by", "created_at", "updated_at"];
    const FIELD_UNIQUE = [];
    const FIELD_UPLOAD = [];
    const FIELD_TYPE = [
        "id" => "bigint",
        "produksi_id" => "bigint",
        "barang_id" => "bigint",
        "jumlah" => "integer",
        "created_by" => "bigint",
        "updated_by" => "bigint",
        "created_at" => "timestamp_without_time_zone",
        "updated_at" => "timestamp_without_time_zone",
    ];

    const FIELD_DEFAULT_VALUE = [
        "produksi_id" => "",
        "barang_id" => "",
        "jumlah" => "",
        "created_by" => "",
        "updated_by" => "",
        "created_at" => "",
        "updated_at" => "",
    ];
    const FIELD_RELATION = [
        "produksi_id" => [
            "linkTable" => "produksi",
            "aliasTable" => "B",
            "linkField" => "id",
            "displayName" => "rel_produksi_id",
            "selectFields" => ["no_produksi"],
            "selectValue" => "id AS rel_produksi_id"
        ],
        "barang_id" => [
            "linkTable" => "barang",
            "aliasTable" => "C",
            "linkField" => "id",
            "displayName" => "rel_barang_id",
            "selectFields" => ["nama"],
            "selectValue" => "id AS rel_barang_id"
        ],
        "created_by" => [
            "linkTable" => "users",
            "aliasTable" => "D",
            "linkField" => "id",
            "displayName" => "rel_created_by",
            "selectFields" => ["username"],
            "selectValue" => "id AS rel_created_by"
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
        "produksi_id" => "required|integer|exists:produksi,id",
        "barang_id" => "required|integer|exists:barang,id",
        "jumlah" => "required|integer",
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
        $produksi = Produksi::where('id', $input['produksi_id'])->first();
        $kode_group = KodeGroup::find($produksi->kode_group_id);
        $stok = $kode_group->stok_akhir - $input['jumlah'];
        $nilai_old = $kode_group->nilai_akhir / $kode_group->stok_akhir;
        $nilai_new = $nilai_old * $input['jumlah'];
        // kurangi stok
        $kode_group->stok_akhir = $stok;
        $kode_group->nilai_akhir = $kode_group->nilai_akhir - $nilai_new;
        $kode_group->save();

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
        $produksi = Produksi::where('id', $input['produksi_id'])->first();
        $kode_group = KodeGroup::find($produksi->kode_group_id);
        $stok = $kode_group->stok_akhir + $input['jumlah'];
        $nilai_old = $kode_group->nilai_akhir / $kode_group->stok_akhir;
        $nilai_new = $nilai_old * $input['jumlah'];
        // kurangi stok
        $kode_group->stok_akhir = $stok;
        $kode_group->nilai_akhir = $kode_group->nilai_akhir + $nilai_new;
        $kode_group->save();

        return $input;
    }// end custom
}
