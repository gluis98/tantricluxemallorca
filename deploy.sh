#!/bin/bash

# Script de deployment para Tantric Luxe Mallorca
# NO requiere Node.js en producción
# Ejecutar en el servidor de producción

echo "🚀 Iniciando deployment..."

# 1. Instalar dependencias de PHP
echo "📦 Instalando dependencias de PHP..."
composer install --no-dev --optimize-autoloader

# 2. Verificar assets compilados (opcional)
if [ -f "public/build/manifest.json" ]; then
    echo "✅ Manifest.json encontrado - usando assets compilados"
else
    echo "ℹ️  No se encontró manifest.json - el proyecto usará CSS inline (no requiere Node)"
fi

# 3. Optimizar Laravel
echo "⚡ Optimizando Laravel..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 4. Limpiar cachés
echo "🧹 Limpiando cachés..."
php artisan cache:clear
php artisan config:clear
php artisan view:clear

# 5. Re-cachear
echo "💾 Re-cacheando..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 6. Permisos
echo "🔐 Configurando permisos..."
chmod -R 755 storage bootstrap/cache

echo "✅ Deployment completado!"
echo "ℹ️  NOTA: Este proyecto NO requiere Node.js en producción"
