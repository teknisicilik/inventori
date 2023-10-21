<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateBarang extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('barang', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kategori_barang_id')->constrained('kategori_barang');
            $table->string('kode_barang');
            $table->string('nama');
            $table->string('satuan');
            $table->foreignId('created_by')->nullable()->constrained('users');
            $table->foreignId('updated_by')->nullable()->constrained('users');
            $table->timestamps();
        });
        $data = [
            [
                "id" => 1,
                "kategori_barang_id" => 1,
                "kode_barang" => "CA",
                "nama" => "Canal",
                "satuan" => "KG"
            ],
            [
                "id" => 2,
                "kategori_barang_id" => 2,
                "kode_barang" => "AG",
                "nama" => "Atap Galvalum",
                "satuan" => "KG"
            ]
        ];
        DB::table('barang')->insert($data);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('barang');
    }
}
