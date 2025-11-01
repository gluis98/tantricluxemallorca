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

  // Verificar si tiene prefijo /en o /de
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // CASO 1: URL con prefijo /en o /de
  if (pathnameHasLocale) {
    const segments = pathname.split('/').filter(Boolean);
    const locale = segments[0]; // 'en' o 'de'
    const pathWithoutLocale = '/' + segments.slice(1).join('/') || '/';

    // Si alguien intenta acceder a /es/algo, redirigir a /algo (sin prefijo)
    if (locale === 'es') {
      const cleanPath = pathname.replace('/es', '') || '/';
      return NextResponse.redirect(new URL(cleanPath, request.url));
    }

    // Encontrar la ruta canónica (nombre de carpeta real) para /en y /de
    let canonicalPath = pathWithoutLocale;
    
    for (const [canonical, translations] of Object.entries(pathTranslations)) {
      if (translations[locale as keyof typeof translations] === pathWithoutLocale) {
        canonicalPath = canonical;
        break;
      }
    }

    // Reescribir a la ruta canónica si es diferente
    // ej: /en/about → /en/acerca (Next.js usa carpeta /acerca)
    if (canonicalPath !== pathWithoutLocale) {
      return NextResponse.rewrite(new URL(`/${locale}${canonicalPath}`, request.url));
    }
    
    return NextResponse.next();
  }

  // CASO 2: URL sin prefijo (potencialmente español o traducción sin prefijo)
  
  // Verificar si la ruta es una traducción de inglés o alemán SIN el prefijo correcto
  // ej: Si alguien va a /about (sin /en), debe ir a /en/about
  for (const [canonical, translations] of Object.entries(pathTranslations)) {
    // Verificar inglés
    if (translations.en === pathname && translations.es !== pathname) {
      // Esta es una URL en inglés sin el prefijo /en
      return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
    }
    
    // Verificar alemán
    if (translations.de === pathname && translations.es !== pathname) {
      // Esta es una URL en alemán sin el prefijo /de
      return NextResponse.redirect(new URL(`/de${pathname}`, request.url));
    }
  }

  // Si llegamos aquí, es una ruta en español (default)
  // Reescribir internamente para que Next.js encuentre la carpeta correcta
  // ej: /servicios → /es/servicios (interno, usuario ve /servicios)
  return NextResponse.rewrite(new URL(`/es${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)'],
};