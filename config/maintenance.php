<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Modo mantenimiento (variable de entorno)
    |--------------------------------------------------------------------------
    |
    | Si APP_MAINTENANCE=true, todas las peticiones web pasan por Laravel
    | se redirigen a /mantenimiento. No hay excepciones de rutas.
    |
    | Tras cambiar el .env en producción: php artisan config:clear
    |
    */

    'enabled' => filter_var(env('APP_MAINTENANCE', false), FILTER_VALIDATE_BOOL),

    'path' => 'mantenimiento',

];
