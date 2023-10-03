<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateRoleGroups extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role_groups', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('role_group_name', 255)->unique();
            $table->text('description')->nullable();
            $table->integer('active')->nullable(true)->default('1');
            $table->bigInteger('created_by')->nullable();
            $table->bigInteger('updated_by')->nullable();
            $table->timestamps();

            $table->index(['role_group_name', 'active', 'created_by', 'updated_by']);
        });

        $data = [
            [
                "id" => 1,
                "role_group_name" => "Developer",
                "description" => null,
                "active" => 1
            ],
            [
                "id" => 2,
                "role_group_name" => "System Admin",
                "description" => null,
                "active" => 1
            ]
        ];
        DB::table('role_groups')->insert($data);
        // DB::statement("SELECT setval('role_groups_id_seq', (SELECT MAX(id) FROM role_groups)+1)");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_groups');
    }
}
