'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n, type Locale } from '@/i18n-config';

// Mapeo completo: ruta canónica (español) → traducciones
const pathTranslations: Record<string, Record<string, string>> = {
  '/': {
    es: '/',
    en: '/',
    de: '/',
  },
  '/acerca': {
    es: '/acerca',
    en: '/about',
    de: '/uber-uns',
  },
  '/servicios': {
    es: '/servicios',
    en: '/services',
    de: '/leistungen',
  },
  '/contacto': {
    es: '/contacto',
    en: '/contact',
    de: '/kontakt',
  },
  '/masajistas': {
    es: '/masajistas',
    en: '/masseuses',
    de: '/masseurinnen',
  },
  '/whatsapp': {
    es: '/whatsapp',
    en: '/whatsapp',
    de: '/whatsapp',
  },
};

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const getTranslatedPath = (targetLocale: string) => {
    if (!pathname) return targetLocale === 'es' ? '/' : `/${targetLocale}`;

    // 1. Detectar el idioma actual desde la ruta
    let currentLocale: string = 'es'; // Por defecto español
    let pathWithoutLocale = pathname;

    if (pathname.startsWith('/en/') || pathname === '/en') {
      currentLocale = 'en';
      pathWithoutLocale = pathname.replace('/en', '') || '/';
    } else if (pathname.startsWith('/de/') || pathname === '/de') {
      currentLocale = 'de';
      pathWithoutLocale = pathname.replace('/de', '') || '/';
    }
    // Si no tiene prefijo, ya es español

    // 2. Encontrar la ruta canónica (española) desde la ruta actual
    let canonicalPath = pathWithoutLocale;
    
    for (const [canonical, translations] of Object.entries(pathTranslations)) {
      if (translations[currentLocale] === pathWithoutLocale) {
        canonicalPath = canonical;
        break;
      }
    }

    // 3. Obtener la traducción al idioma destino
    const translatedPath = pathTranslations[canonicalPath]?.[targetLocale] || canonicalPath;

    // 4. Construir la URL final
    if (targetLocale === 'es') {
      // Español SIN prefijo
      return translatedPath;
    } else {
      // Inglés y alemán CON prefijo
      return `/${targetLocale}${translatedPath}`;
    }
  };

  // Detectar idioma actual para resaltar el botón activo
  const getCurrentLocale = (): string => {
    if (pathname.startsWith('/en')) return 'en';
    if (pathname.startsWith('/de')) return 'de';
    return 'es';
  };

  const currentLocale = getCurrentLocale();

  return (
    <div className="flex gap-2 items-center">
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={getTranslatedPath(locale)}
          className={`
            uppercase text-sm font-semibold transition-colors px-2 py-1 rounded
            ${currentLocale === locale
              ? 'text-amber-400 bg-amber-400/10'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
            }
          `}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}