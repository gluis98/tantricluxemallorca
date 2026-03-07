<?php

if (!function_exists('vite_asset')) {
    /**
     * Obtiene la URL del asset compilado desde el manifest de Vite
     * Si no existe el manifest, devuelve el asset directo
     */
    function vite_asset($path)
    {
        $manifestPath = public_path('build/manifest.json');
        
        if (file_exists($manifestPath)) {
            $manifest = json_decode(file_get_contents($manifestPath), true);
            
            if (isset($manifest[$path]['file'])) {
                return asset('build/' . $manifest[$path]['file']);
            }
        }
        
        // Fallback: devolver el asset directo si no hay manifest
        return asset(str_replace('resources/', '', $path));
    }
}
