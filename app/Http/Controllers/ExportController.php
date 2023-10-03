<?php

namespace App\Http\Controllers;

use App\CoreService\CallService;
use App\Exports\QualitatifRecapMonitoring;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function export()
    {
        return Excel::download(new QualitatifRecapMonitoring, 'rekap_monitoring.xlsx');
    }

    public function exportTemplateAuctionPlan()
    {
        $input = request()->all();
        $fileService = CallService::run("AuctionPlansExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateAuctionWin()
    {
        $input = request()->all();
        $fileService = CallService::run("AuctionWinsExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }
    public function exportTemplateRecentContract()
    {
        $input = request()->all();
        $fileService = CallService::run("RecentContractsExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }
    public function exportTemplatePreviousContract()
    {
        $input = request()->all();
        $fileService = CallService::run("PreviousContractsExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateIs()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputIsExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateIsBukp()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputIsBukpExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateIsBiayaKeuangan()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputIsBkbExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateBsDivisiAp()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputBsDivisiApExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateBsCorplan()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputBsCorplanExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateBsKp()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputBsKpExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;
            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateBsJakon()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputBsJakonExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;
            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateBsBujt()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputBsBujtExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;
            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateBsAp()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputBsApExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;
            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateScenarioPmn()
    {
        $input = request()->all();
        $fileService = CallService::run("ScenarioPmnExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }


    public function exportTemplateIscfbs()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputIsbscfExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplatePemLahan()
    {
        // dd('tes');
        $input = request()->all();
        $fileService = CallService::run("DataInputPemLahanExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateTolTerbangun()
    {
        // dd('tes');
        $input = request()->all();
        $fileService = CallService::run("DataInputTolTerbangunExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateDataInputCapexInvestasiJalanTol()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputCapexInvestasiJalanTolExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateDataInputCapexAsetTetap()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputCapexAsetTetapExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateDataInputCapexPenambahanModal()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputCapexPenambahanModalExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateDataInputCapexInvestasiAkuisisi()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputCapexInvestasiAkuisisiExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateDataInputTrafficTol()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputTrafficTolExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateDataInputCfKasOperasiIn()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputCfKasOperasiInExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateDataInputCfCorplan()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputCfCorplanExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }

    public function exportTemplateDataInputPmnDivisi()
    {
        $input = request()->all();
        $fileService = CallService::run("DataInputPmnDivisiExportTemplate", $input);

        $response = $fileService->getData();
        if ($response->success) {
            $data = $response->data;
            $fileName = $data->filename;

            return response()->download(storage_path('/app/template-excel/' . $fileName));
        } else {
            return response()->json($response, 500);
        }
    }
}
