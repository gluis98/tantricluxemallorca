import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';

// Mapeo: ruta canónica (carpeta real) → traducciones visibles en URL
const pathTranslations: Record<string, Record<string, string>> = {
  '/acerca': {
    es: '/acerca',      // Español: /acerca
    en: '/about',       // Inglés: /en/about
    de: '/uber-uns',    // Alemán: /de/uber-uns
  },
  '/': {
    es: '/',
    en: '/',
    de: '/',
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

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignorar archivos estáticos, API, etc.
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Detectar el idioma de la URL actual
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // URL con prefijo de idioma (ej: /en/about, /de/uber-uns)
    const segments = pathname.split('/').filter(Boolean);
    const locale = segments[0] as string; // 'es', 'en', o 'de'
    const pathWithoutLocale = '/' + segments.slice(1).join('/') || '/';

    // Buscar la ruta canónica desde la ruta traducida
    let canonicalPath = pathWithoutLocale;
    for (const [canonical, translations] of Object.entries(pathTranslations)) {
      if (translations[locale] === pathWithoutLocale) {
        canonicalPath = canonical;
        break;
      }
    }

    // Reescribir a la ruta canónica con el idioma
    return NextResponse.rewrite(new URL(`/${locale}${canonicalPath}`, request.url));
  } else {
    // URL sin prefijo de idioma (español por defecto)
    // Buscar si la ruta existe en las traducciones
    let locale = 'es';
    let canonicalPath = pathname;

    // Verificar si la ruta es una traducción en español
    for (const [canonical, translations] of Object.entries(pathTranslations)) {
      if (translations[locale] === pathname) {
        canonicalPath = canonical;
        break;
      }
    }

    // Reescribir al español (sin prefijo)
    return NextResponse.rewrite(new URL(`/${locale}${canonicalPath}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|sitemap.xml|robots.txt|.*\\..*).*)'],
};