# Tantric Luxe Mallorca - Laravel

Sitio web de masajes tántricos en Palma de Mallorca.

## Requisitos

- PHP >= 8.1
- Composer
- Node.js >= 18.x
- NPM

## Instalación Local

1. Clonar el repositorio
2. Instalar dependencias de PHP:
   ```bash
   composer install
   ```
3. Instalar dependencias de Node:
   ```bash
   npm install
   ```
4. Copiar `.env.example` a `.env` y configurar
5. Generar key de aplicación:
   ```bash
   php artisan key:generate
   ```
6. Compilar assets:
   ```bash
   npm run dev
   ```
   O para producción:
   ```bash
   npm run build
   ```

## Deployment en Producción

### ✅ El proyecto NO requiere Node.js en producción

El proyecto está configurado para funcionar **sin Node.js en el servidor de producción**. 

### Pasos de Deployment

1. **Compilar assets localmente (opcional):**
   ```bash
   # Solo si necesitas recompilar los assets
   npm install
   npm run build
   ```

2. **Subir archivos al servidor:**
   - Sube todos los archivos EXCEPTO:
     - `node_modules/`
     - `.env` (configúralo en el servidor)
     - Archivos de desarrollo

3. **En el servidor (SOLO PHP, NO Node):**
   ```bash
   # Instalar dependencias de PHP
   composer install --no-dev --optimize-autoloader
   
   # Optimizar Laravel
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

4. **Configurar permisos:**
   ```bash
   chmod -R 755 storage bootstrap/cache
   ```

5. **Verificar que existe:**
   - `public/build/manifest.json` (si usas assets compilados)
   - Si no existe, el proyecto usará CSS inline como fallback

### Cómo funciona

- Si existe `public/build/manifest.json` → Usa los assets compilados
- Si NO existe → Usa CSS inline con Tailwind CDN (no requiere Node)

## Script de Deployment

Puedes usar el script `deploy.sh`:

```bash
chmod +x deploy.sh
./deploy.sh
```

## Estructura del Proyecto

- `app/` - Lógica de la aplicación
- `resources/views/` - Vistas Blade
- `resources/css/` - Estilos CSS
- `resources/js/` - JavaScript
- `public/` - Archivos públicos
- `lang/` - Traducciones (es, en, de)

## Comandos Útiles

- `npm run dev` - Desarrollo con hot reload
- `npm run build` - Compilar para producción
- `php artisan serve` - Servidor de desarrollo
- `php artisan cache:clear` - Limpiar caché

## Notas

- Los assets de Vite DEBEN compilarse antes de ir a producción
- El archivo `public/build/manifest.json` es esencial para que Laravel cargue los assets
- En desarrollo, usa `npm run dev` para hot reload
- En producción, usa `npm run build` para compilar assets optimizados
