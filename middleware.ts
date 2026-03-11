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
  let pathname = request.nextUrl.pathname;

  // Ignorar archivos estáticos, API, etc.
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico' ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt'
  ) {
    return NextResponse.next();
  }

  // Normalizar trailing slash: remover trailing slash excepto para la raíz
  // Esto ayuda a manejar URLs con y sin trailing slash de manera consistente
  if (pathname !== '/' && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // Detectar el idioma de la URL actual
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // URL con prefijo de idioma (ej: /es/, /en/about, /de/uber-uns)
    const segments = pathname.split('/').filter(Boolean);
    const locale = segments[0] as string; // 'es', 'en', o 'de'
    const pathWithoutLocale = '/' + segments.slice(1).join('/') || '/';

    // Si es una ruta de servicio dinámico (/servicios/[slug])
    if (pathWithoutLocale.startsWith('/servicios/') && segments.length >= 3) {
      const serviceSlug = segments[2]; // El slug del servicio
      
      // Servicios antiguos que ya no existen - redirigir a la página de servicios
      const deprecatedServices: Record<string, string[]> = {
        es: ['golden-relax', 'golden-sensitivo', 'experiencia-golden', 'golden-suite-experiencia', 'velvet-duet-pareja'],
        en: ['golden-relax', 'golden-sensitive', 'golden-experience', 'golden-suite-experience', 'velvet-duet-couple'],
        de: ['golden-relax', 'golden-sensitiv', 'golden-erlebnis', 'golden-suite-erlebnis', 'velvet-duet-paar'],
      };
      
      // Si es un servicio antiguo, redirigir a la página de servicios
      if (deprecatedServices[locale]?.includes(serviceSlug)) {
        const servicesPath = locale === 'es' ? '/servicios' : locale === 'en' ? '/services' : '/leistungen';
        const redirectUrl = new URL(`/${locale}${servicesPath}`, request.url);
        return NextResponse.redirect(redirectUrl, 301); // 301 = permanente
      }
      
      // Es una ruta dinámica de servicio válida, reescribir directamente
      const response = NextResponse.rewrite(new URL(`/${locale}${pathWithoutLocale}`, request.url));
      response.headers.set('x-pathname', pathname);
      return response;
    }

    // Buscar la ruta canónica desde la ruta traducida
    let canonicalPath = pathWithoutLocale;
    let found = false;
    
    // Primero buscar rutas exactas
    for (const [canonical, translations] of Object.entries(pathTranslations)) {
      if (translations[locale] === pathWithoutLocale) {
        canonicalPath = canonical;
        found = true;
        break;
      }
    }

    // Reescribir a la ruta canónica con el idioma
    const response = NextResponse.rewrite(new URL(`/${locale}${canonicalPath}`, request.url));
    // Agregar header con la ruta para hreflang
    response.headers.set('x-pathname', pathname);
    return response;
  } else {
    // URL sin prefijo de idioma - Servir en español por defecto SIN redirigir
    // Esto evita problemas de indexación y permite que las URLs funcionen directamente
    let locale = 'es';
    let canonicalPath = pathname;

    // Verificar si es un servicio antiguo sin prefijo de idioma
    if (pathname.startsWith('/servicios/')) {
      const segments = pathname.split('/').filter(Boolean);
      if (segments.length >= 2) {
        const serviceSlug = segments[1];
        const deprecatedServices = ['golden-relax', 'golden-sensitivo', 'experiencia-golden', 'golden-suite-experiencia', 'velvet-duet-pareja'];
        
        // Si es un servicio antiguo, redirigir a la página de servicios
        if (deprecatedServices.includes(serviceSlug)) {
          const redirectUrl = new URL('/es/servicios', request.url);
          return NextResponse.redirect(redirectUrl, 301); // 301 = permanente
        }
      }
    }

    // Verificar si la ruta es una traducción en español
    for (const [canonical, translations] of Object.entries(pathTranslations)) {
      if (translations[locale] === pathname) {
        canonicalPath = canonical;
        break;
      }
    }

    // Construir la ruta de rewrite (mismo formato que cuando hay prefijo de idioma)
    // Asegurarse de que la ruta tenga el formato correcto para Next.js
    const rewritePath = canonicalPath === '/' ? '/es' : `/es${canonicalPath}`;
    
    // Construir la URL de destino usando la misma base que request.url
    const rewriteUrl = new URL(rewritePath, request.url);
    
    // Usar rewrite en lugar de redirect para mantener la URL original visible
    // pero servir el contenido en español (mismo formato que cuando hay prefijo)
    const response = NextResponse.rewrite(rewriteUrl);
    // Agregar header con la ruta original para hreflang y SEO
    response.headers.set('x-pathname', pathname);
    // Indicar que se está sirviendo en español por defecto
    response.headers.set('x-default-locale', 'es');
    return response;
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|sitemap.xml|robots.txt|.*\\..*).*)'],
};