<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CrudController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\ImportDataInputIscbscfController;
use App\Http\Controllers\UploadController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group([
    'middleware' => ['setguard:api', 'auth.rest']
], function () {
    // START CUSTOM ROUTE
    # EXPORT TEMPLATE

    // END CUSTOM ROUTE
    Route::get('/test', [CrudController::class, 'test']);

    Route::get('/{model}/list', [CrudController::class, 'index']);
    Route::get('/{model}/dataset', [CrudController::class, 'dataset']);
    Route::post('/{model}/create', [CrudController::class, 'create']);
    Route::put('/{model}/update', [CrudController::class, 'update']);
    Route::delete('/{model}/delete', [CrudController::class, 'delete']);
    Route::put('/{model}/remove', [CrudController::class, 'remove']);
    Route::put('/{model}/restore', [CrudController::class, 'restore']);
    Route::get('/{model}/{id}/show', [CrudController::class, 'show']);

    Route::post('upload', [UploadController::class, 'upload'])->name("upload")->middleware('auth.rest');


    Route::get('/gen-lang/lang', [CrudController::class, 'lang']);
    Route::get('/gen-model/{model}', [CrudController::class, 'generate']);
    Route::get('/gen-module/listmodule', [CrudController::class, 'listModule']);

    #+
});

Route::get('/export-excel/template-auction-plans', [ExportController::class, 'exportTemplateAuctionPlan']);
Route::get('/export-excel/template-auction-wins', [ExportController::class, 'exportTemplateAuctionWin']);
Route::get('/export-excel/template-recent-contracts', [ExportController::class, 'exportTemplateRecentContract']);
Route::get('/export-excel/template-previous-contracts', [ExportController::class, 'exportTemplatePreviousContract']);
Route::get('/export-excel/template-is', [ExportController::class, 'exportTemplateIs']);
Route::get('/export-excel/template-is-bukp', [ExportController::class, 'exportTemplateIsBukp']);
Route::get('/export-excel/template-is-biaya-keuangan', [ExportController::class, 'exportTemplateIsBiayaKeuangan']);
Route::get('/export-excel/template-bs-divisi-ap', [ExportController::class, 'exportTemplateBsDivisiAp']);
Route::get('/export-excel/template-bs-corplan', [ExportController::class, 'exportTemplateBsCorplan']);
Route::get('/export-excel/template-bs-kp', [ExportController::class, 'exportTemplateBsKp']);
Route::get('/export-excel/template-bs-jakon', [ExportController::class, 'exportTemplateBsJakon']);
Route::get('/export-excel/template-bs-bujt', [ExportController::class, 'exportTemplateBsBujt']);
Route::get('/export-excel/template-bs-ap', [ExportController::class, 'exportTemplateBsAp']);
Route::get('/export-excel/template-scenario-pmn', [ExportController::class, 'exportTemplateScenarioPmn']);


/**
 * Route Pembebasan Lahan
 */
Route::get('/export-excel/template-pem-lahan', [ExportController::class, 'exportTemplatePemLahan']);

/**
 * Route Tol Terbangun / KM Terbangun
 */
Route::get('/export-excel/template-tol-terbangun', [ExportController::class, 'exportTemplateTolTerbangun']);

/**
 * Route Capex
 */
Route::get('/export-excel/template-capex-investasi-jalan-tol', [ExportController::class, 'exportTemplateDataInputCapexInvestasiJalanTol']);
Route::get('/export-excel/template-capex-aset-tetap', [ExportController::class, 'exportTemplateDataInputCapexAsetTetap']);
Route::get('/export-excel/template-capex-penambahan-modal', [ExportController::class, 'exportTemplateDataInputCapexPenambahanModal']);
Route::get('/export-excel/template-capex-investasi-akuisisi', [ExportController::class, 'exportTemplateDataInputCapexInvestasiAkuisisi']);

/**
 * Route CF
 */
Route::get('/export-excel/template-cf-kas-operasi-in', [ExportController::class, 'exportTemplateDataInputCfKasOperasiIn']);
Route::get('/export-excel/template-cf-corplan', [ExportController::class, 'exportTemplateDataInputCfCorplan']);

/**
 * Route Pmn
 */
// Route::get('/export-excel/template-pmn-corplan', [ExportController::class, 'exportTemplateDataInputPmnCorplan']);
// Route::get('/export-excel/template-pmn-divisi', [ExportController::class, 'exportTemplateDataInputPmnDivisi']);

/**
 * Route Capex Traffic Tol
 */
Route::get('/export-excel/template-traffic-tol', [ExportController::class, 'exportTemplateDataInputTrafficTol']);


#+ SHOULD BBE DELETE
Route::get('/export-excel/template-iscfbs', [ExportController::class, 'exportTemplateIscfbs']);
#- SHOULD BBE DELETE


Route::get('/export-excel/dashboard-rekap-monitoring', [ExportController::class, 'export']);

Route::get('/export-excel/template-input', [ExportController::class, 'export']);
Route::post('/import-excel/testing-import', [ImportDataInputIscbscfController::class, 'import']);


Route::group([
    'middleware' => ['setguard:api']
], function () {
    Route::get('file/{model}/{field}/{id}/{time}', [UploadController::class, 'getFile']);
    Route::get('tumb-file/{model}/{field}/{id}/{time}', [UploadController::class, 'getTumbnailFile']);
    Route::get('temp-file/{path}/{time}/{ext}', [UploadController::class, 'getTempFile']);
    Route::get('tumb-temp-file/{path}/{time}/{ext}', [UploadController::class, 'getThumbTempFile']);
});
