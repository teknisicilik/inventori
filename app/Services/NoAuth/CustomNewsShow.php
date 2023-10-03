<?php

namespace App\Services\NoAuth;

use App\CoreService\CallService;
use App\Models\Users;
use App\CoreService\CoreService;
use App\Models\LandingConfigs;
use App\Models\LandingImages;
use App\Models\MobileAppVersions;
use App\Models\News;

class CustomNewsShow extends CoreService
{

    public $transaction = false;
    public $task = null;

    public function prepare($input)
    {
        return $input;
    }

    public function process($input, $originalInput)
    {
        $news = News::find($input['id']);
        foreach (News::FIELD_UPLOAD as $key => $field) {
            $news->{$field} = columnValueToFileObject($field, $news->{$field}, News::TABLE, $news->id);
        }

        return [
            "data" => $news
        ];

        return $news;
    }

    protected function validation()
    {
        return [];
    }
}
