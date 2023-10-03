<?php

namespace App\Services\User;

use App\Models\Users;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\CoreService\CoreException;
use App\CoreService\CoreService;


class FindUserByUsername extends CoreService
{

    public $transaction = false;
    public $task = null;

    public function prepare($input)
    {
        return $input;
    }

    public function process($input, $originalInput)
    {
        $object = Users::where('username', '=', $input['username'])->first();
        if (is_null($object)) {
            throw new CoreException("Pengguna tidak ditemukan");
        }

        if(!empty($object)){
            $object->password = "";
        }
        return $object;
    }

    protected function validation()
    {
        return [
            "limit" => "integer|min:0|max:1000",
            "offset" => "integer|min:0",
            "branch_id" => "integer"
        ];
    }
}
