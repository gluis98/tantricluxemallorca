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

  // ====================================
  // MODO MANTENIMIENTO ACTIVADO
  // ====================================
  // Redirigir todas las rutas al home según el idioma

  // Detectar el idioma de la URL actual
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const segments = pathname.split('/').filter(Boolean);
    const locale = segments[0]; // 'es', 'en', o 'de'
    const pathWithoutLocale = '/' + segments.slice(1).join('/') || '/';

    // Si no está en el home, redirigir al home del idioma correspondiente
    if (pathWithoutLocale !== '/') {
      if (locale === 'es') {
        return NextResponse.redirect(new URL('/', request.url));
      } else {
        return NextResponse.redirect(new URL(`/${locale}`, request.url));
      }
    }

    // Permitir el acceso al home con el idioma correspondiente
    return NextResponse.rewrite(new URL(`/${locale}/`, request.url));
  } else {
    // URL sin prefijo de idioma
    // Si no es la raíz, redirigir a la raíz
    if (pathname !== '/') {
      return NextResponse.redirect(new URL('/', request.url));
    }

    // Reescribir al home español
    return NextResponse.rewrite(new URL('/es/', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|sitemap.xml|robots.txt|.*\\..*).*)'],
};