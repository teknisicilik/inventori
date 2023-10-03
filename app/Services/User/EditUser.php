<?php

namespace App\Services\User;

use App\Models\Users;
use Illuminate\Support\Facades\DB;
use App\CoreService\CoreException;
use App\CoreService\CoreService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;


class EditUser extends CoreService
{

    public $transaction = true;
    public $task = null;

    public function prepare($input)
    {
        $model = 'users';
        $classModel = "\\App\\Models\\" . Str::ucfirst(Str::camel($model));
        if (!class_exists($classModel))
            throw new CoreException("Model " . $model . " Not found Coy", 404);

        $authRoles = getRoleName(Auth::user()->role_id);
        $permission = "update-" . $model;
        if (!hasPermission($permission))
            throw new CoreException(__("message.forbidden403", ['permission' => $permission, 'role' => $authRoles]), 403);

        $input["class_model"] = $classModel;

        return $input;
    }

    public function process($input, $originalInput)
    {
        $classModel = $input["class_model"];
        $object = $classModel::select("users.*", "roles.role_name")
            ->leftjoin('roles', 'roles.id', 'users.role_id')
            ->find($input["id"]);
        if (is_null($object)) {
            throw new CoreException("Pengguna tidak ditemukan");
        }

        if ($classModel::FIELD_UNIQUE) {
            foreach ($classModel::FIELD_UNIQUE as $search) {
                $query = $classModel::whereRaw("true");
                $fieldTrans = [];
                $uniqueChange = false;
                foreach ($search as $key) {
                    if ($input[$key] != $object->{$key}) {
                        $uniqueChange = true;
                    }
                    $fieldTrans[] = __("field.$key");
                    $query->where($key, $input[$key]);
                };

                if ($uniqueChange) {
                    $isi = $query->first();
                    if (!is_null($isi)) {
                        throw new CoreException(__("message.alreadyExist", ['field' => implode(",", $fieldTrans)]));
                    }
                }
            }
        }

        // START MOVE FILE
        //SEBELUM DIVALIDASI UBAH DULU DATA OBJECT YANG DIKIRMKAN FRONE END JADI STRING,
        //TERUTAMA KOLOM UPLOAD FILE
        foreach ($classModel::FIELD_UPLOAD as $item) {
            if (array_key_exists($item, $input)) {
                if (is_array($input[$item])) {
                    $input[$item] = isset($input[$item]["path"]) ? $input[$item]["path"] : $input[$item]["field_value"];
                }
            }
        }
        // END

        foreach ($classModel::FIELD_UPLOAD as $item) {
            if (!is_blank($input, $item)) {
                if ($object->{$item} !== $input[$item]) {
                    $tmpPath = $input[$item] ?? null;

                    if (!is_null($tmpPath)) {
                        if (!Storage::exists($tmpPath)) {
                            throw new CoreException(__("message.tempFileNotFound", ['field' => $item]));
                        }
                        $tmpPath = $input[$item] ?? null;

                        $originalname = pathinfo(storage_path($tmpPath), PATHINFO_FILENAME);
                        $ext = pathinfo(storage_path($tmpPath), PATHINFO_EXTENSION);

                        $newPath = $classModel::FILEROOT . "/" . $originalname . "." . $ext;
                        if (Storage::exists($newPath)) {
                            $id = 1;
                            $filename = pathinfo(storage_path($newPath), PATHINFO_FILENAME);
                            $ext = pathinfo(storage_path($newPath), PATHINFO_EXTENSION);
                            while (true) {
                                $originalname = $filename . "($id)." . $ext;
                                if (!Storage::exists($classModel::FILEROOT . "/" . $originalname))
                                    break;
                                $id++;
                            }
                            $newPath = $classModel::FILEROOT . "/" . $originalname;
                        }
                        //OLD FILE DELETE
                        $oldFilePath = $object->{$item};
                        Storage::delete($oldFilePath);
                        //END MOVE FILE
                        $object->{$item} = $newPath;
                        Storage::move($tmpPath, $newPath);
                        //END MOVE FILE
                    } else {
                        //OLD FILE DELETE
                        $oldFilePath = $object->{$item};
                        Storage::delete($oldFilePath);
                        //END MOVE FILE
                    }
                }
            }
        }
        // END MOVE FILE

        foreach ($classModel::FIELD_EDIT as $item) {
            if ($item == "updated_by") {
                $input[$item] = Auth::id();
            }
            if (!is_blank($input, $item)) {
                if (!in_array($item, $classModel::FIELD_UPLOAD) and $item != "password") {
                    $object->{$item} = $input[$item];
                }
            }
        }
        $object->save();

        // UNTUK FORMAT DATA IMG
        if (!empty($classModel::FIELD_UPLOAD)) {
            foreach ($classModel::FIELD_UPLOAD as $item) {
                if ((preg_match("/file_/i", $item) or preg_match("/img_/i", $item)) and !is_null($object->$item)) {
                    $url = URL::to('api/file/' . $classModel::TABLE . '/' . $item . '/' . $object->id . '/' . time());
                    $tumbnailUrl = URL::to('api/tumb-file/' . $classModel::TABLE . '/' . $item . '/' . $object->id . '/' . time());
                    $ext = pathinfo($object->$item, PATHINFO_EXTENSION);
                    $filename = pathinfo(storage_path($object->$item), PATHINFO_BASENAME);
                    $object->$item = (object) [
                        "ext" => (is_null($object->$item)) ? null : $ext,
                        "url" => $url,
                        "tumbnail_url" => $tumbnailUrl,
                        "filename" => (is_null($object->$item)) ? null : $filename,
                        "field_value" => $object->$item
                    ];
                }
                if (preg_match("/array_/i", $item)) {
                    $key->$item = unserialize($key->$item);
                    if (!$key->$item) {
                        $key->$item = null;
                    }
                }
            }
        }
        return [
            "data" => $object,
            "message" => __("message.succesfullyUpdate")
        ];
    }

    protected function validation()
    {
        return [
            "email" => "email|nullable",
            "fullname" => "required",
            "role_id" => "required"
        ];
    }
}
