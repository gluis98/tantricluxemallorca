/** @type {import('next').NextConfig} */
const nextConfig = {
  // Importante para Netlify
  output: 'standalone',
  
  // Configuración de imágenes
  images: {
    domains: ['tantricluxemallorca.com'],
    unoptimized: false, // Cambiar a true si tienes problemas con imágenes en Netlify
  },

  // Asegurar trailing slashes consistentes
  trailingSlash: false,

  // Configuración i18n si usas next-intl o similar
  // i18n: {
  //   locales: ['es', 'en', 'de'],
  //   defaultLocale: 'es',
  // },

  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
        ],
      },
    ]
  },

  // Redirecciones si las necesitas
  async redirects() {
    return [
      // Ejemplo: redireccionar /servicios a /es/servicios si es necesario
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ]
  },
}

module.exports = nextConfig