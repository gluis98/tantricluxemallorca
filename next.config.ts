/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para que funcione con Netlify
  // NO uses output: 'export' si quieres sitemap dinámico
  
  images: {
    domains: ['tantricluxemallorca.com'],
  },

  // Asegurar que no hay trailing slash
  trailingSlash: false,

  // i18n routing si lo necesitas (opcional con App Router)
  // El App Router maneja i18n diferente con carpetas [lang]
}

module.exports = nextConfig