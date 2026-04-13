<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\ServiceDetailController;
use App\Http\Controllers\MasseusesController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ImageController;
use App\Http\Middleware\CanonicalLocalePath;

// Redireccionar raíz a español
Route::get('/', function () {
    return redirect('/es');
});

// Consolidar URLs sin prefijo de idioma a sus canónicas en español
Route::redirect('/about', '/es/acerca', 301);
Route::redirect('/contact', '/es/contacto', 301);
Route::redirect('/services', '/es/servicios', 301);
Route::redirect('/masseuses', '/es/masajistas', 301);
Route::redirect('/uber-uns', '/es/acerca', 301);
Route::redirect('/servicios', '/es/servicios', 301);
Route::redirect('/masajistas', '/es/masajistas', 301);
Route::redirect('/acerca', '/es/acerca', 301);
Route::redirect('/contacto', '/es/contacto', 301);

// Optimizador de imágenes (resize + WebP)
Route::get('/img', [ImageController::class, 'serve'])->name('img.serve');

// Sitemap
Route::get('/sitemap.xml', [App\Http\Controllers\SitemapController::class, 'index'])->name('sitemap');

// Rutas con prefijo de idioma
Route::group(['prefix' => '{locale}', 'middleware' => ['web', CanonicalLocalePath::class], 'where' => ['locale' => 'es|en|de|it|fr']], function () {
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

    // Rutas traducidas - Italiano
    Route::get('/chi-siamo', [AboutController::class, 'index'])->name('about.it');
    Route::get('/servizi', [ServicesController::class, 'index'])->name('services.it');
    Route::get('/servizi/{slug}', [ServiceDetailController::class, 'show'])->name('service.detail.it');
    Route::get('/massaggiatrici', [MasseusesController::class, 'index'])->name('masseuses.it');
    Route::get('/contatti', [ContactController::class, 'index'])->name('contact.it');

    // Rutas traducidas - Francés
    Route::get('/a-propos', [AboutController::class, 'index'])->name('about.fr');
    Route::get('/services', [ServicesController::class, 'index'])->name('services.fr');
    Route::get('/services/{slug}', [ServiceDetailController::class, 'show'])->name('service.detail.fr');
    Route::get('/masseuses', [MasseusesController::class, 'index'])->name('masseuses.fr');
    Route::get('/contact', [ContactController::class, 'index'])->name('contact.fr');
});
