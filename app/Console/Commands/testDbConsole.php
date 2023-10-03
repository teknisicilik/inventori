<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
class testDbConsole extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        //....
        try {
             DB::connection()->getPdo();
             if(DB::connection()->getDatabaseName()){
                 echo "Yes! Successfully connected to the DB: " . DB::connection()->getDatabaseName();
             }else{
                 die("Could not find the database. Please check your configuration.");
             }
         } catch (\Exception $e) {
             die("Could not open connection to database server.  Please check your configuration.");
         }
    }
}
