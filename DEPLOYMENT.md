# Guía de Deployment - Tantric Luxe Mallorca

## ⚠️ IMPORTANTE: El proyecto NO requiere Node.js en producción

El proyecto está configurado para funcionar **sin Node.js en producción**. Los assets se compilan localmente y se suben al servidor.

### Opción 1: Usar assets ya compilados (Recomendado)

Si ya tienes los archivos compilados en `public/build/`, simplemente súbelos al servidor. El proyecto los detectará automáticamente.

### Opción 2: Compilar assets localmente (Solo para desarrollo)

Si necesitas compilar los assets (solo en tu máquina local de desarrollo):

```bash
npm install
npm run build
```

Esto generará los archivos compilados en `public/build/` con el `manifest.json`. Luego sube estos archivos al servidor.

### 2. Configurar variables de entorno

Asegúrate de que en tu `.env` de producción tengas:

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://tu-dominio.com

# Vite
VITE_APP_NAME="${APP_NAME}"
```

### 3. Optimizar Laravel

```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 4. Permisos

```bash
chmod -R 755 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

### 5. Verificar que public/build existe

Asegúrate de que la carpeta `public/build` existe y contiene:
- `manifest.json`
- `assets/` (con los archivos CSS y JS compilados)

## Solución rápida si ya está en producción

Si ya tienes el sitio en producción y aparece el error:

1. Conecta por SSH al servidor
2. Ve al directorio del proyecto
3. Ejecuta:
   ```bash
   npm install
   npm run build
   ```
4. Verifica que `public/build/manifest.json` existe
5. Si es necesario, limpia la caché:
   ```bash
   php artisan cache:clear
   php artisan config:clear
   php artisan view:clear
   ```

## Nota importante

El comando `npm run build` compila los assets para producción. Esto es diferente de `npm run dev` que se usa en desarrollo.
