<?php

if (!function_exists('get_vite_asset')) {
    /**
     * Obtiene la URL del asset compilado desde el manifest de Vite
     * Retorna null si no se encuentra
     */
    function get_vite_asset($resourcePath)
    {
        $manifestPath = public_path('build/manifest.json');
        
        if (!file_exists($manifestPath) || !is_readable($manifestPath)) {
            return null;
        }
        
        try {
            $manifestContent = file_get_contents($manifestPath);
            $manifest = json_decode($manifestContent, true);
            
            if (json_last_error() !== JSON_ERROR_NONE || !is_array($manifest)) {
                return null;
            }
            
            if (!isset($manifest[$resourcePath]['file'])) {
                return null;
            }
            
            $fileName = $manifest[$resourcePath]['file'];
            $fullPath = public_path('build/' . $fileName);
            
            // Verificar que el archivo realmente existe
            if (!file_exists($fullPath) || !is_readable($fullPath)) {
                return null;
            }
            
            return asset('build/' . $fileName);
        } catch (\Exception $e) {
            return null;
        }
    }
}
