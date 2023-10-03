<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMappingRolesPermissions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mapping_roles_permissions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('role_id');//->constrained('roles')->onDelete('cascade');
            $table->foreignId('permission_id');//->constrained('permissions')->onDelete('cascade');
            $table->integer('active')->nullable(true)->default('1');
            $table->timestamps();

            // $table->unique(array('role_id', 'permission_id', 'active'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mapping_roles_permissions');
    }
}
