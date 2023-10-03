<?php

namespace App\Services\NoAuth;

use Illuminate\Support\Facades\DB;
use App\CoreService\CoreException;
use App\CoreService\CoreService;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class RolesDataset extends CoreService
{

    public $transaction = false;
    public $task = null;

    public function prepare($input)
    {
        $model = 'roles';
        $classModel = "\\App\\Models\\" . Str::ucfirst(Str::camel($model));
        if (!class_exists($classModel))
            throw new CoreException(__("message.model404", ['model' => $model]), 404);

        $input["class_model_name"] = $model;
        $input["class_model"] = $classModel;
        return $input;
    }

    public function process($input, $originalInput)
    {
        $classModelName = $input["class_model_name"];
        $classModel = $input["class_model"];

        $selectableList = [];
        $sortBy = $classModel::TABLE . ".id";
        $sort = strtoupper($input["sort"] ?? "DESC") == "ASC" ? "ASC" : "DESC";

        $sortableList = $classModel::FIELD_SORTABLE;

        if (in_array($input["sort_by"] ?? "", $sortableList)) {
            $sortBy = $input["sort_by"];
        }

        $tableJoinList = [];
        $filterList = [];
        $params = [];

        foreach ($classModel::FIELD_LIST as $list) {
            $selectableList[] = $classModel::TABLE . "." . $list;
        }

        foreach ($classModel::FIELD_FILTERABLE as $filter => $operator) {
            if (!is_blank($input, $filter)) {
                $filterList[] = " AND " . $classModel::TABLE . "." . $filter .  " " . $operator["operator"] . " :$filter";
                $params[$filter] = $input[$filter];
            }
        }

        $i = 0;
        foreach ($classModel::FIELD_RELATION as $key => $relation) {
            $alias = $relation["aliasTable"];
            $fieldDisplayed = "CONCAT_WS (' - ',";
            foreach ($relation["selectFields"] as $keyField) {
                $fieldDisplayed .= $alias . '.' . $keyField . ",";
            }
            $fieldDisplayed = substr($fieldDisplayed, 0, strlen($fieldDisplayed) - 1);
            $fieldDisplayed .= ") AS " . $relation["displayName"];
            $selectableList[] = $fieldDisplayed;
            ///

            $tableJoinList[] = "LEFT JOIN " . $relation["linkTable"] . " " . $alias . " ON " .
                $classModel::TABLE . "." . $key . " = " .  $alias . "." . $relation["linkField"];
            $i++;
        }

        if (!empty($classModel::CUSTOM_SELECT)) $selectableList[] = $classModel::CUSTOM_SELECT;

        $condition = " WHERE true ";

        if (!empty($classModel::CUSTOM_LIST_FILTER)) {
            foreach ($classModel::CUSTOM_LIST_FILTER as $customListFilter) {
                $condition .= " AND " . $customListFilter;
            }
        }
        if (!is_blank($input, "search")) {
            $searchableList = $classModel::FIELD_SEARCHABLE;
            $searchableList = array_map(function ($item) {
                return "UPPER($item) ILIKE :search";
            }, $searchableList);
        } else {
            $searchableList = [];
        }


        if (count($searchableList) > 0 && !is_blank($input, "search"))
            $params["search"] = "%" . strtoupper($input["search"] ?? "") . "%";

        if (isset($input["limit"])) {
            if ($input["limit"] == 'null') {
                $limit = 'null';
            } else {
                $limit = $input["limit"];
            }
        } else {
            $limit = 'null';
        }
        $offset = $input["offset"] ?? 0;
        if (!is_null($input["page"] ?? null)) {
            if ($limit == 'null') {
                $offset = 'null';
            } else {
                $offset = $limit * ($input["page"] - 1);
            }
        }


        $sql = "SELECT " . implode(", ", $selectableList) . " FROM " . $classModel::TABLE . " " .
            implode(" ", $tableJoinList) . $condition .
            (count($searchableList) > 0 ? " AND (" . implode(" OR ", $searchableList) . ")" : "") .
            implode("\n", $filterList) . " ORDER BY " . $sortBy . " " . $sort . " LIMIT $limit OFFSET $offset ";
        $sqlForCount = "SELECT COUNT(1) AS total FROM " . $classModel::TABLE . " " .
            implode(" ", $tableJoinList) . $condition .
            (count($searchableList) > 0 ? " AND (" . implode(" OR ", $searchableList) . ")" : "") .
            implode("\n", $filterList);

        $object =  DB::select($sql, $params);

        foreach ($classModel::FIELD_ARRAY as $item) {
        }

        array_map(function ($key) use ($classModel, $classModelName) {
            foreach ($key as $field => $value) {
                $key->class_model_name = $classModelName;
                if ((preg_match("/file_/i", $field) or preg_match("/img_/i", $field)) and !is_null($key->$field)) {
                    $url = URL::to('api/file/' . $classModel::TABLE . '/' . $field . '/' . $key->id);
                    $tumbnailUrl = URL::to('api/tumb-file/' . $classModel::TABLE . '/' . $field . '/' . $key->id);
                    $ext = pathinfo($key->$field, PATHINFO_EXTENSION);
                    $filename = pathinfo(storage_path($key->$field), PATHINFO_BASENAME);

                    $key->$field = (object) [
                        "ext" => (is_null($key->$field)) ? null : $ext,
                        "url" => $url,
                        "tumbnail_url" => $tumbnailUrl,
                        "filename" => (is_null($key->$field)) ? null : $filename,
                        "field_value" => $key->$field
                    ];
                }
                if (preg_match("/array_/i", $field)) {
                    $key->$field = unserialize($key->$field);
                    if (!$key->$field) {
                        $key->$field = null;
                    }
                }
            }
            return $key;
        }, $object);


        $total = DB::selectOne($sqlForCount, $params)->total;
        if ($limit == 'null') {
            $totalPage = 1;
        } else {
            $totalPage = ceil($total / $limit);
        }
        return [
            "data" => $object,
            "total" => $total,
            "totalPage" => $totalPage
        ];
    }

    protected function validation()
    {
        return [];
    }
}
