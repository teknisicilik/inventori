<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateRoles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('role_code', 255)->unique();
            $table->string('role_name', 255);
            $table->foreignId('role_group_id')->nullable()->constrained('role_groups');
            $table->text('description')->nullable();
            $table->integer('active')->nullable(true)->default('1');
            $table->bigInteger('created_by')->nullable();
            $table->bigInteger('updated_by')->nullable();
            $table->timestamps();

            // $table->index(['role_code', 'role_name', 'role_group_id', 'active', 'created_by', 'updated_by']);
        });
        $data = [
            [
                "id" => 100,
                "role_code" => "developer",
                "role_name" => "Developer",
                "role_group_id" => 1,
                "description" => "Developer",
            ],
            [
                "id" => 1,
                "role_code" => "super-admin-system",
                "role_name" => "Super Admin System",
                "role_group_id" => 2,
                "description" => "Super Admin System",
            ]
        ];
        DB::table('roles')->insert($data);
        // DB::statement("SELECT setval('roles_id_seq', (SELECT MAX(id) FROM roles)+1)");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
