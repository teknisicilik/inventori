<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePermissions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permissions', function (Blueprint $table) {
            $table->bigInteger("id")->autoIncrement();
            $table->string('permission_code', 100)->unique();
            $table->string('permission_name', 200);
            $table->string('permission_group', 200)->nullable();
            $table->string('application', 200)->nullable();
            $table->text('description');
            $table->integer('active')->nullable(true)->default('1');
            $table->timestamps();

            // $table->index(['permission_code', 'permission_name', 'permission_group', 'active']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permissions');
    }
}
