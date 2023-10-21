<?php

return [
    [
        "type" => "GET",
        "end_point" => "/get",
        "class" => "App\Services\Crud\Get"
    ],
    [
        "type" => "GET",
        "end_point" => "/dataset",
        "class" => "App\Services\Crud\Dataset"
    ],
    [
        "type" => "POST",
        "end_point" => "/create",
        "class" => "App\Services\Crud\Add"
    ],
    [
        "type" => "POST",
        "end_point" => "/update",
        "class" => "App\Services\Crud\Edit"
    ],
    [
        "type" => "POST",
        "end_point" => "/delete",
        "class" => "App\Services\Crud\Delete"
    ],
    [
        "type" => "GET",
        "end_point" => "/show",
        "class" => "App\Services\Crud\Find"
    ],
    [
        "type" => "GET",
        "end_point" => "/sample",
        "class" => "App\Services\Sample\SampleService"
    ],
    [
        "type" => "GET",
        "end_point" => "/sample",
        "class" => "App\Services\Sample\SampleService"
    ],
    [
        "type" => "GET",
        "end_point" => "/me",
        "class" => "App\Services\Auth\Me"
    ],
    [
        "type" => "GET",
        "end_point" => "/logout",
        "class" => "App\Services\Auth\DoLogout"
    ],
    [
        "type" => "POST",
        "end_point" => "/login",
        "class" => "App\Services\Auth\DoLogin"
    ],
    [
        "type" => "POST",
        "end_point" => "/change_password",
        "class" => "App\Services\Auth\DoChangePassword"
    ],
    [
        "type" => "POST",
        "end_point" => "/custom/users/reset-password-default",
        "class" => "App\Services\User\ResetPasswordDefault"
    ],

    // NO AUTH
    [
        "type" => "GET",
        "end_point" => "/no-auth/roles/dataset",
        "class" => "App\Services\NoAuth\RolesDataset"
    ],

    [
        "type" => "GET",
        "end_point" => "/users/list",
        "class" => "App\Services\User\GetUser"
    ],
    [
        "type" => "POST",
        "end_point" => "/users/create",
        "class" => "App\Services\User\AddUser"
    ],
    [
        "type" => "PUT",
        "end_point" => "/users/update",
        "class" => "App\Services\User\EditUser"
    ],
    [
        "type" => "POST",
        "end_point" => "/users/active-deactive",
        "class" => "App\Services\User\ActiveDeactiveUser"
    ],

    [
        "type" => "GET",
        "end_point" => "/permission",
        "class" => "App\Services\User\ViewPermission"
    ],
    [
        "type" => "POST",
        "end_point" => "/permission/save",
        "class" => "App\Services\User\SavePermission"
    ],
    [
        "type" => "GET",
        "end_point" => "/roles",
        "class" => "App\Services\User\GetRole"
    ],
    [
        "type" => "POST",
        "end_point" => "/roles/create",
        "class" => "App\Services\User\AddRole"
    ],
    [
        "type" => "PUT",
        "end_point" => "/roles/update",
        "class" => "App\Services\User\EditRole"
    ],
    [
        "type" => "DELETE",
        "end_point" => "/roles/delete",
        "class" => "App\Services\User\DeleteRole"
    ],
    [
        "type" => "GET",
        "end_point" => "/role/find",
        "class" => "App\Services\User\FindRoleById"
    ],


    /*
    |--------------------------------------------------------------------------
    | CUSTOM API
    |--------------------------------------------------------------------------
    |
    | This option controls the default hash driver that will be used to hash
    | passwords for your application. By default, the bcrypt algorithm is
    | used; however, you remain free to modify this option if you wish.
    |
    | Supported: "bcrypt", "argon", "argon2id"
    */

    /*
    | MAPPING ROLES PERMISSION
    */
    [
        "type" => "GET",
        "end_point" => "/custom/mapping-roles-permissions/list",
        "class" => "App\Services\Custom\MappingRolesPermissions\MappingRolesPermissionsList"
    ],
    [
        "type" => "PUT",
        "end_point" => "/custom/mapping-roles-permissions/update",
        "class" => "App\Services\Custom\MappingRolesPermissions\MappingRolesPermissionsUpdate"
    ],

    /** LANDING - NO API */
    [
        "type" => "GET",
        "end_point" => "/custom/landing/configs",
        "class" => "App\Services\NoAuth\CustomLandingConfigs"
    ],
    [
        "type" => "GET",
        "end_point" => "/custom/landing/news",
        "class" => "App\Services\NoAuth\CustomNewsList"
    ],
    [
        "type" => "GET",
        "end_point" => "/custom/landing/news/{id}",
        "class" => "App\Services\NoAuth\CustomNewsShow"
    ],
    [
        "type" => "POST",
        "end_point" => "/custom/landing/achievement/form",
        "class" => "App\Services\NoAuth\CustomAchievementForm"
    ],
    [
        "type" => "POST",
        "end_point" => "/custom/pemasukan",
        "class" => "App\Services\Custom\Pemasukan\PemasukanDetail"
    ],
];
