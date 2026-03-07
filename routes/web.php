<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\ServiceDetailController;
use App\Http\Controllers\MasseusesController;
use App\Http\Controllers\ContactController;

// Redireccionar raíz a español
Route::get('/', function () {
    return redirect('/es');
});

// Sitemap
Route::get('/sitemap.xml', [App\Http\Controllers\SitemapController::class, 'index'])->name('sitemap');

// Rutas con prefijo de idioma
Route::group(['prefix' => '{locale}', 'middleware' => 'web', 'where' => ['locale' => 'es|en|de']], function () {
    // Home
    Route::get('/', [HomeController::class, 'index'])->name('home');
    
    // Rutas traducidas - Español
    Route::get('/acerca', [AboutController::class, 'index'])->name('about.es');
    Route::get('/servicios', [ServicesController::class, 'index'])->name('services.es');
    Route::get('/servicios/{slug}', [ServiceDetailController::class, 'show'])->name('service.detail.es');
    Route::get('/masajistas', [MasseusesController::class, 'index'])->name('masseuses.es');
    Route::get('/contacto', [ContactController::class, 'index'])->name('contact.es');
    
    // Rutas traducidas - Inglés
    Route::get('/about', [AboutController::class, 'index'])->name('about.en');
    Route::get('/services', [ServicesController::class, 'index'])->name('services.en');
    Route::get('/services/{slug}', [ServiceDetailController::class, 'show'])->name('service.detail.en');
    Route::get('/masseuses', [MasseusesController::class, 'index'])->name('masseuses.en');
    Route::get('/contact', [ContactController::class, 'index'])->name('contact.en');
    
    // Rutas traducidas - Alemán
    Route::get('/uber-uns', [AboutController::class, 'index'])->name('about.de');
    Route::get('/leistungen', [ServicesController::class, 'index'])->name('services.de');
    Route::get('/leistungen/{slug}', [ServiceDetailController::class, 'show'])->name('service.detail.de');
    Route::get('/masseurinnen', [MasseusesController::class, 'index'])->name('masseuses.de');
    Route::get('/kontakt', [ContactController::class, 'index'])->name('contact.de');
});
