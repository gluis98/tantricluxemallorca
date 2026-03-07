<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $locales = ['es', 'en', 'de'];
        $defaultLocale = 'es';
        
        // Obtener el idioma de la URL
        $locale = $request->segment(1);
        
        // Si el primer segmento es un idioma válido, usarlo
        if (in_array($locale, $locales)) {
            App::setLocale($locale);
            Session::put('locale', $locale);
        } else {
            // Intentar obtener de la sesión
            $locale = Session::get('locale', $defaultLocale);
            App::setLocale($locale);
        }
        
        return $next($request);
    }
}
