<?php

namespace App\Providers;

use App\CoreService\CallService;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        setlocale(LC_ALL, 'IND');
        date_default_timezone_set('Asia/Jakarta');

        /**
         * Log query for debugging
         * It's may will slow the response
         *
         * @disable it by comment
         */
        DB::listen(function ($query) {
            // Log::info([
            //     $query->sql,
            //     $query->bindings,
            //     $query->time
            // ]);
        });

        Validator::extend('exists_file', function ($attribute, $value, $parameters, $validator) {
            return Storage::exists($value);
        });

        Route::middleware(['web', 'setguard:web'])->group(function () {

            foreach (Config::get("service") as $route) {
                $reflect = new \ReflectionClass($route["class"]);
                $serviceName = $reflect->getShortName();
                $this->app->singleton($serviceName, $route["class"]);
                if (!isset($route["end_point"]) && !isset($route["type"])) continue;

                if ($route["type"] == "POST") {
                    Route::post($route["end_point"], function () use ($serviceName) {
                        $input = request()->all();
                        return CallService::execute($serviceName, $input);
                    });
                } else if ($route["type"] == "GET") {
                    Route::get($route["end_point"], function () use ($serviceName) {
                        $input = request()->all();
                        return CallService::execute($serviceName, $input);
                    });
                } else if ($route["type"] == "PUT") {
                    Route::put($route["end_point"], function () use ($serviceName) {
                        $input = request()->all();
                        return CallService::execute($serviceName, $input);
                    });
                } else if ($route["type"] == "DELETE") {
                    Route::delete($route["end_point"], function () use ($serviceName) {
                        $input = request()->all();
                        return CallService::execute($serviceName, $input);
                    });
                }
            };
        });

        Route::prefix("api")->middleware(['api', 'setguard:api'])->group(function () {

            foreach (Config::get("service") as $route) {
                $reflect = new \ReflectionClass($route["class"]);
                $serviceName = $reflect->getShortName();
                $this->app->singleton($serviceName, $route["class"]);
                if (!isset($route["end_point"]) && !isset($route["type"])) continue;

                if ($route["type"] == "POST") {
                    Route::post($route["end_point"], function () use ($serviceName) {
                        $input = request()->all();
                        return CallService::execute($serviceName, $input);
                    });
                } else if ($route["type"] == "GET") {
                    Route::get($route["end_point"], function ($uid = null) use ($serviceName) {
                        $input = request()->all();
                        if (!is_null($uid)) {
                            $input["id"] = $uid;
                        }
                        return CallService::execute($serviceName, $input);
                    });
                } else if ($route["type"] == "PUT") {
                    Route::put($route["end_point"], function () use ($serviceName) {
                        $input = request()->all();
                        return CallService::execute($serviceName, $input);
                    });
                } else if ($route["type"] == "DELETE") {
                    Route::delete($route["end_point"], function () use ($serviceName) {
                        $input = request()->all();
                        return CallService::execute($serviceName, $input);
                    });
                }
            };
        });

        Collection::macro('recursive', function () {
            return $this->map(function ($value) {
                return is_array($value) || is_object($value)
                    ? (new static($value))->recursive()     // <- new static() instead of collect()
                    : $value;
            });
        });

        require __DIR__ . "../../helpers/function.php";
    }
}
