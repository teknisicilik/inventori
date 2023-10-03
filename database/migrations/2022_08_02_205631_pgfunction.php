<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class Pgfunction extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        // DB::statement('create or replace function naturalsort(text)
        //     returns bytea language sql immutable strict as $f$
        //     select string_agg(convert_to(coalesce(r[2], length(length(r[1])::text) || length(r[1])::text || r[1]), \'SQL_ASCII\'),\'\x00\')
        //     from regexp_matches($1, \'0*([0-9]+)|([^0-9]+)\', \'g\') r;
        // $f$;');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
