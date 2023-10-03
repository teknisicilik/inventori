##  Laravel 

Yang dibutuhkan :
 - composer, >= php7.3 

## Install Dependency
```
composer install
```

## 
composer require phpoffice/phpspreadsheet

## Cara Install
copy file .env.example ke .env
```
cp .env.example .env
```
Sesuaikan .env dengan konfigurasi database anda

## Setting JWT Secret Key
Jalankan :
php artisan jwt:secret

## MENAMBAHKAN APP SECRET KEY
php artisan key:generate

## Database Migration
Jalankan database migration
```
php artisan migrate
```

# Membuat Migration Table :
1. php artisan make:migration create_{nama_table}
2. php artisan make:migration alter_table_{}

# Generate Model
1. php artisan generate:model
2. php artisan generate:model {model_name}

# Seeder
1. php artisan db:seed
2. php artisan db:seed --class=ModelSeeder

# PHP ARTISAN SERVE
1. php artisan serve --port 8091

# PHP ARTISAN SERVE TANPA GASNTI ENV PHP
1. Cd ke XAMPP
2. .\php.exe D:\Laravel\qhse-adhi-v2-laravel\artisan serve --port 8100

////////////

## Email Queue
QUEUE_CONNECTION=database
php artisan queue:work

## Image Compresion 
composer require intervention/image

## Menambahkan API Custom Baru :
1. Buat File Di Folder App/Service/Custom
2. Selanjutnya Buat File Baru Sesuai dengan service API yang akan dibuat.
3. Kemudian Setelah Membuat File Service API baru, tambahakan routingnya di file    service.php yang ada di Config/service.php
4. Tambahkan :
    [
        "type" => "{{HTTP Method tanda tanda kurawal}}",
        "end_point" => "{{nama end pointnya tanpa tanda kurawal}}",
        "class" => "{{path file service baru tadi yang ada di service/custom tanpa tanda kurawal}}"
    ],
5. Test end point pada POSTMAN
