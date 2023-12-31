<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreatePelanggan extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pelanggan', function (Blueprint $table) {
            $table->id();
            $table->string('kode_pelanggan');
            $table->string('nama');
            $table->string('alamat');
            $table->foreignId('created_by')->nullable()->constrained('users');
            $table->foreignId('updated_by')->nullable()->constrained('users');
            $table->timestamps();
        });
        $data = [
            [
                "id" => 1,
                "kode_pelanggan" => "ASML",
                "nama" => "Auri SML",
                "alamat" => "Lombok"
            ],
            [
                "id" => 2,
                "kode_pelanggan" => "ASMT",
                "nama" => "Auri SMT",
                "alamat" => "Terboyo"
            ]
        ];
        DB::table('pelanggan')->insert($data);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pelanggan');
    }
}
