<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBatalPemasukan extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('batal_pemasukan', function (Blueprint $table) {
            $table->id();
            $table->string('no_pembelian');
            $table->date('tgl_pembelian');
            $table->foreignId('supplier_id')->constrained('supplier');
            $table->string('no_dokumen');
            $table->string('tipe_dokumen');
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
        Schema::dropIfExists('batal_pemasukan');
    }
}
