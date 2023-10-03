<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('fullname');
            $table->string('username')->unique();
            $table->text('password');
            $table->string('email')->unique();
            $table->string('telephone')->nullable();
            $table->text('img_photo_user')->nullable();
            $table->foreignId('role_id')->constrained('roles');
            $table->timestampTz('email_verified_at')->nullable();
            $table->timestampTz('last_login_at')->nullable();
            $table->string('status_code')->nullable();
            $table->timestampTz('approval_at')->nullable();
            $table->foreignId('approval_by')->nullable()->constrained('users');
            $table->text('approval_description')->nullable();
            $table->foreignId('created_by')->nullable()->constrained('users');
            $table->foreignId('updated_by')->nullable()->constrained('users');
            $table->timestamps();

            // $table->index(['username','email','role_id','status_code','approval_by','created_by','updated_by']);

        });
        $data = [
            [
                "id" => 100,
                "fullname" => "Agung",
                "username" => "agung",
                "password" => bcrypt("master"),
                "role_id" => 100,
                "email" => "agung@mail.com",
                "status_code" => 'user_active',
            ],
            [
                "id" => 101,
                "fullname" => "Admin System",
                "username" => "admin",
                "password" => bcrypt("master"),
                "role_id" => 1,
                "email" => "admin@dev.com",
                "status_code" => 'user_active',
            ]
        ];
        DB::table('users')->insert($data);
        // DB::statement("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users)+1)");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
