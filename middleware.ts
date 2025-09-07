import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// --- INICIO: Configuración para rutas traducidas ---
// Mapea la ruta canónica (usada en las carpetas, ej: /acerca) a la ruta traducida para otros idiomas.
const pathTranslations: Record<string, Record<string, string>> = {
  '/acerca': {
    en: '/about',
  },
  '/servicios': {
    en: '/services',
  },
  '/contacto': {
    en: '/contact',
  },
  '/masajistas': {
    en: '/masseuses',
  },
  '/whatsapp': {
    en: '/whatsapp',
  },
};
// --- FIN: Configuración ---

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Ignorar rutas de assets, API, etc.
  if (['/api', '/_next/static', '/_next/image', '/images', '/favicon.ico'].some((p) => pathname.startsWith(p))) {
    return;
  }

  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // --- Caso 1: La ruta ya tiene un prefijo de idioma (ej: /en/about) ---
  if (pathnameHasLocale) {
    const locale = pathname.split('/')[1];

    // Para idiomas no predeterminados, reescribimos a la ruta canónica que Next.js entiende (el nombre de la carpeta).
    // ej: El usuario ve /en/about, pero Next.js necesita renderizar /en/acerca.
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    
    let canonicalPath = '';
    for (const [key, translations] of Object.entries(pathTranslations)) {
      if (translations[locale] === pathWithoutLocale) {
        canonicalPath = key;
        break;
      }
    }
    
    if (canonicalPath && canonicalPath !== pathWithoutLocale) {
        return NextResponse.rewrite(new URL(`/${locale}${canonicalPath}`, request.url));
    }
    
    return;
  }

  // --- Caso 2: La ruta NO tiene prefijo de idioma. Hay que redirigir. ---

  // Buscar si el `pathname` es una ruta traducida (ej: /about).
  for (const [canonicalPath, translations] of Object.entries(pathTranslations)) {
    for (const [locale, translatedPath] of Object.entries(translations)) {
      if (translatedPath === pathname) {
        // Encontramos una traducción, redirigimos a la URL con el prefijo de idioma correcto.
        // ej: /about -> /en/about
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
      }
    }
  }

  // Si no es una ruta traducida, usamos el locale detectado (o el por defecto) y redirigimos.
  // ej: /acerca -> /es/acerca, / -> /es
  const locale = getLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};