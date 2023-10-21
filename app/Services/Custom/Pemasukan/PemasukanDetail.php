<?php

namespace App\Services\Custom\Pemasukan;

use App\CoreService\CoreService;
use Complex\Functions;

    class PemasukanDetail extends CoreService
    {
        public function prepare ($input) {
            return $input;
        }
        public function process ($input, $or) {
            return [
                "input" => $input,
                "original" => $or
            ];

        }
    }
