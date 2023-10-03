<?php

namespace App\Services\User;

use App\Service\LogActivity;
use App\CoreService\CoreException;
use App\CoreService\CoreService;
use App\CoreService\CallService;
use App\Models\User;

class ResetPasswordDefault extends CoreService
{

    public $transaction = true;
    public $task = null;

    public function prepare($input)
    {
        
        if (!hasPermission("reset-password-default"))
            throw new CoreException("Forbidden, you don't have permission reset-password-default", 403);

        $input["user_detail"] = User::find($input["id"]);
        return $input;
    }

    public function process($input, $originalInput)
    {

        $passwordDefault = '123456';
        $object = $input["user_detail"];
        $object->password = password_hash($passwordDefault, PASSWORD_BCRYPT);
        $object->save();

        return [
            "message" => "Berhasil Mereset Password. Password Baru User " . $object->username . " Adalah " . $passwordDefault
        ];
    }

    protected function validation()
    {
        return [
            "id" => "required"
        ];
    }
}
