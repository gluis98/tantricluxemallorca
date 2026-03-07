<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class ServicesController extends Controller
{
    public function index($locale = 'es')
    {
        App::setLocale($locale);
        return view('services', [
            'locale' => $locale,
        ]);
    }
}
