<?php

namespace App\Services\NoAuth;

use App\CoreService\CallService;
use App\Models\Users;
use App\CoreService\CoreService;
use App\Models\LandingConfigs;
use App\Models\LandingImages;
use App\Models\MobileAppVersions;
use App\Models\News;

class CustomLandingConfigs extends CoreService
{

    public $transaction = false;
    public $task = null;

    public function prepare($input)
    {
        return $input;
    }

    public function process($input, $originalInput)
    {

        $config = LandingConfigs::first();
        foreach (LandingConfigs::FIELD_UPLOAD as $key => $field) {
            $config->{$field} = columnValueToFileObject($field, $config->{$field}, LandingConfigs::TABLE, $config->id);
        }

        // $fileService = CallService::run("Get", [
        //     "model" => "news",
        //     "limit" => 6
        // ]);
        // $news = $fileService->getData();

        $landing_images = LandingImages::get()->map(function($item) {
            foreach (LandingImages::FIELD_UPLOAD as $key => $field) {
                $item->{$field} = columnValueToFileObject($field, $item->{$field}, LandingImages::TABLE, $item->id);
            }
            return $item;
        });

        $news = News::limit(isset($input['limit']) ? $input['limit'] : 6)
        ->orderBy('datetime_at', 'asc')
        ->get()
        ->map(function($item) {
            foreach (News::FIELD_UPLOAD as $key => $field) {
                $item->{$field} = columnValueToFileObject($field, $item->{$field}, News::TABLE, $item->id);
            }
            return $item;
        });

        return [
            "data" => [
                "config" => $config,
                "landing_images" => $landing_images,
                "news" => $news,
            ]
        ];
    }

    protected function validation()
    {
        return [];
    }
}
