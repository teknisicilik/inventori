<?php

namespace App\Services\NoAuth;

use App\CoreService\CallService;
use App\Models\Users;
use App\CoreService\CoreService;
use App\Models\LandingConfigs;
use App\Models\LandingImages;
use App\Models\MobileAppVersions;
use App\Models\News;

class CustomNewsList extends CoreService
{

    public $transaction = false;
    public $task = null;

    public function prepare($input)
    {
        return $input;
    }

    public function process($input, $originalInput)
    {
        $news = News::get()->map(function($item) {
            foreach (News::FIELD_UPLOAD as $key => $field) {
                $item->{$field} = columnValueToFileObject($field, $item->{$field}, News::TABLE, $item->id);
            }
            return $item;
        });

        return [
            "data" => $news
        ];
    }

    protected function validation()
    {
        return [];
    }
}
