<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBatalPemasukanDetail extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('batal_pemasukan_detail', function (Blueprint $table) {
            $table->id();
            $table->integer('pemasukan_id');
            $table->foreignId('barang_id')->constrained('barang');
            $table->integer('jumlah');
            $table->integer('total_nilai');
            $table->foreignId('created_by')->nullable()->constrained('users');
            $table->foreignId('updated_by')->nullable()->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('batal_pemasukan_detail');
    }
}
