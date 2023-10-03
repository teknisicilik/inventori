<?php

namespace App\Services\Auth;

use Illuminate\Support\Facades\DB;
use App\CoreService\CoreException;
use App\CoreService\CoreService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;

class Me extends CoreService
{

    public $transaction = false;
    public $permission = null;

    public function prepare($input)
    {
        return $input;
    }

    public function process($input, $originalInput)
    {
        $user = Auth::user();
        if (is_null($user)) {
            throw new CoreException(__("message.403"), 403);
        }
        $sql = "SELECT B.permission_code FROM mapping_roles_permissions A
            INNER JOIN permissions B ON B.id = A.permission_id
            INNER JOIN users C ON C.role_id = A.role_id AND C.id = ?";

        $permissionList =   array_map(function ($item) {
            return $item->permission_code;
        }, DB::select($sql, [$user->id]));

        if ($user->img_photo_user) {
            $url = URL::to('api/file/users/img_photo_user/' . $user->id . '/' . time());
            $tumbnailUrl = URL::to('api/tumb-file/users/img_photo_user/' . $user->id . '/' . time());
            $ext = pathinfo($user->img_photo_user, PATHINFO_EXTENSION);
            $filename = pathinfo(storage_path($user->img_photo_user), PATHINFO_BASENAME);
            $user->img_photo_user = (object) [
                "ext" => (is_null($user->img_photo_user)) ? null : $ext,
                "url" => $url,
                "tumbnail_url" => $tumbnailUrl,
                "filename" => (is_null($user->img_photo_user)) ? null : $filename,
                "field_value" => $user->img_photo_user
            ];
        }
        // END FOR IMG PHOTO CREATED BY
        // REMOVE SOME PROPERTY OF OBJECT
        unset($user->password);
        // END REMOVE PROPERTY OF OBJECT
        return [
            "user" => $user,
            "permissions" => $permissionList,
        ];
    }

    protected function validation()
    {
        return [];
    }
}
