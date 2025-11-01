import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tantricluxemallorca.com'
  const lastModified = new Date()

  // Definir las rutas con sus traducciones
  const routes = [
    {
      es: '',
      en: '/en',
      de: '/de',
      priority: 1.0,
      changeFrequency: 'weekly' as const,
    },
    {
      es: '/servicios',
      en: '/en/services',
      de: '/de/leistungen',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      es: '/masajistas',
      en: '/en/masseuses',
      de: '/de/masseurinnen',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      es: '/acerca',
      en: '/en/about',
      de: '/de/uber-uns',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      es: '/contacto',
      en: '/en/contact',
      de: '/de/kontakt',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      es: '/whatsapp',
      en: '/whatsapp',
      de: '/whatsapp',
      priority: 0.1,
      changeFrequency: 'monthly' as const,
    },
  ]

  // Generar entradas del sitemap para cada idioma
  const sitemapEntries: MetadataRoute.Sitemap = []

  routes.forEach(route => {
    // Español
    sitemapEntries.push({
      url: `${baseUrl}${route.es}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          es: `${baseUrl}${route.es}`,
          en: `${baseUrl}${route.en}`,
          de: `${baseUrl}${route.de}`,
        },
      },
    })

    // Inglés
    sitemapEntries.push({
      url: `${baseUrl}${route.en}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          es: `${baseUrl}${route.es}`,
          en: `${baseUrl}${route.en}`,
          de: `${baseUrl}${route.de}`,
        },
      },
    })

    // Alemán
    sitemapEntries.push({
      url: `${baseUrl}${route.de}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          es: `${baseUrl}${route.es}`,
          en: `${baseUrl}${route.en}`,
          de: `${baseUrl}${route.de}`,
        },
      },
    })
  })

  return sitemapEntries
}