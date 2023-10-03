<?php

namespace App\Http\Controllers;

use Maatwebsite\Excel\Facades\Excel;
use App\Http\Controllers\Controller;
use App\Imports\TestingImportImport;

class ImportDataInputIscbscfController extends Controller
{
    public function import()
    {
        $file = request()->file('file');
        Excel::import(new TestingImportImport, $file);
        // Excel::import(new TestingImportImport, $file);
        return "A";
    }
}
