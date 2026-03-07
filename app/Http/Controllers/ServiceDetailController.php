<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class ServiceDetailController extends Controller
{
    public function show($locale = 'es', $slug = null)
    {
        App::setLocale($locale);
        return view('service-detail', [
            'locale' => $locale,
            'slug' => $slug,
        ]);
    }
}
