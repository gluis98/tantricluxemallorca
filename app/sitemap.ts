import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tantricluxemallorca.com'
  const lastModified = new Date()

  // Páginas en español (default)
  const spanishPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/servicios', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/masajistas', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/acerca', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contacto', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/whatsapp', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  // Páginas en inglés
  const englishPages = [
    { url: '/en', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/en/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/en/masseuses', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/en/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/en/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/en/whatsapp', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  // Páginas en alemán
  const germanPages = [
    { url: '/de', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/de/leistungen', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/de/masseurinnen', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/de/uber-uns', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/de/kontakt', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/de/whatsapp', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  // Combinar todas las páginas
  const allPages = [...spanishPages, ...englishPages, ...germanPages]

  return allPages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: {
      languages: {
        es: `${baseUrl}${getSpanishUrl(page.url)}`,
        en: `${baseUrl}${getEnglishUrl(page.url)}`,
        de: `${baseUrl}${getGermanUrl(page.url)}`,
      },
    },
  }))
}

// Funciones auxiliares para obtener URLs en diferentes idiomas
function getSpanishUrl(url: string): string {
  const urlMap: { [key: string]: string } = {
    '/en': '/',
    '/en/services': '/servicios',
    '/en/masseuses': '/masajistas',
    '/en/about': '/acerca',
    '/en/contact': '/contacto',
    '/en/whatsapp': '/whatsapp',
    '/de': '/',
    '/de/leistungen': '/servicios',
    '/de/masseurinnen': '/masajistas',
    '/de/uber-uns': '/acerca',
    '/de/kontakt': '/contacto',
    '/de/whatsapp': '/whatsapp',
  }
  return urlMap[url] || url
}

function getEnglishUrl(url: string): string {
  const urlMap: { [key: string]: string } = {
    '': '/en',
    '/servicios': '/en/services',
    '/masajistas': '/en/masseuses',
    '/acerca': '/en/about',
    '/contacto': '/en/contact',
    '/whatsapp': '/en/whatsapp',
    '/de': '/en',
    '/de/leistungen': '/en/services',
    '/de/masseurinnen': '/en/masseuses',
    '/de/uber-uns': '/en/about',
    '/de/kontakt': '/en/contact',
    '/de/whatsapp': '/en/whatsapp',
  }
  return urlMap[url] || url
}

function getGermanUrl(url: string): string {
  const urlMap: { [key: string]: string } = {
    '': '/de',
    '/servicios': '/de/leistungen',
    '/masajistas': '/de/masseurinnen',
    '/acerca': '/de/uber-uns',
    '/contacto': '/de/kontakt',
    '/whatsapp': '/de/whatsapp',
    '/en': '/de',
    '/en/services': '/de/leistungen',
    '/en/masseuses': '/de/masseurinnen',
    '/en/about': '/de/uber-uns',
    '/en/contact': '/de/kontakt',
    '/en/whatsapp': '/de/whatsapp',
  }
  return urlMap[url] || url
}