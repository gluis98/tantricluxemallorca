import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import { Tenali_Ramakrishna } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';
import { getDictionary } from '@/dictionaries/get-dictionary';
import { i18n, type Locale } from '@/i18n-config';
import Header from '@/components/ui/sections/Header';
import Footer from '@/components/ui/sections/Footer';
import '../../app/globals.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

const tenali = Tenali_Ramakrishna({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-tenali',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "Masaje erótico",
  "name": "Tantric Luxe Mallorca",
  "alternateName": "Tantric Luxe",
  "description": "Centro especializado en masaje tantrico Mallorca. Experiencias exclusivas de masaje tantrico en Palma de Mallorca con máxima privacidad y profesionalidad.",
  "url": "https://tantricluxemallorca.com/",
  "telephone": "+34-691-53-61-35",
  "email": "info@tantricluxemallorca.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carrer Fray Luis de León, 7,
    "addressLocality": "Palma",
    "addressRegion": "Islas Baleares",
    "postalCode": "07011",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "39.5736032",
    "longitude": "2.6386885"
  },
  "openingHours": [
    "Mo-Su 09:00-23:00"
  ],
  "priceRange": "99€-499€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card",
  "servedCuisine": [],
  "hasMap": "https://maps.app.goo.gl/325Sq6mRB9zq8p8R7",
  "areaServed": {
    "@type": "City",
    "name": "Palma de Mallorca"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "39.5736032",
      "longitude": "2.6386885"
    },
    "geoRadius": "50000"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Masaje Tantrico Exclusivo Mallorca",
        "description": "Experiencia exclusiva de masaje tantrico en ambiente privado y lujoso"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Masaje Tantrico Premium Palma",
        "description": "Sesión premium de masaje tantrico con técnicas ancestrales"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Experiencia Tantrica Parejas",
        "description": "Taller especializado de masaje tantrico para parejas"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sofia M."
      },
      "reviewBody": "El mejor masaje tantrico Mallorca que he experimentado. La técnica y el ambiente crean una experiencia transformadora única."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Carlos R."
      },
      "reviewBody": "Profesionalidad excepcional en masaje tantrico Palma. El lujo y la discreción hacen de cada sesión una experiencia sagrada inolvidable."
    }
  ],
  "sameAs": [
    "https://instagram.com/tantricluxemallorca",
    "https://facebook.com/tantricluxemallorca"
  ],
  "keywords": "masaje tantrico mallorca, masaje tantrico palma, centro tantrico mallorca, experiencia tantrica palma de mallorca, masaje relajante mallorca",
  "knowsAbout": [
    "Masaje Tantrico",
    "Terapias de Relajación",
    "Experiencias de Bienestar",
    "Masaje Terapéutico",
    "Conexión Espiritual"
  ]
}
            `.trim()
          }}
        />
      </head>
      <body className={`${urbanist.variable} ${tenali.variable} ${cormorant.variable} antialiased`}>

        { /* Start background design */ }
        <div className="min-h-screen relative">

          {/* Complex background with multiple gradients and radial effects */}
          <div className="absolute inset-0 bg-gray-950"></div>

          {/* Multiple radial gradients for depth */}
          <div className="absolute inset-0 bg-gradient-radial from-amber-900/30 via-transparent to-transparent"
            style={{
              background: 'radial-gradient(circle at 20% 30%, rgba(120, 53, 15, 0.4) 0%, transparent 50%)'
            }}></div>

          <div className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 80% 20%, rgba(92, 51, 23, 0.3) 0%, transparent 40%)'
            }}></div>

          <div className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 60% 80%, rgba(69, 39, 17, 0.25) 0%, transparent 35%)'
            }}></div>

          <div className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 10% 70%, rgba(53, 45, 40, 0.2) 0%, transparent 45%)'
            }}></div>

          {/* Linear gradients for overall tone */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-amber-950/10 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-amber-950/10"></div>

          {/* Mandalas in the corners */}
          <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0">
            {/* left Mandala */}
            <div className="absolute top-0 left-0 -translate-x-[60%] md:-translate-x-1/2 w-[600px] h-[600px]">
              <span className="glow-mandala"></span>
              <Image
                src="/images/Mandala.webp"
                alt="Left Mandala"
                width={600}
                height={600}
                className="object-contain w-full h-full relative z-10"
              />
            </div>
            {/* Right Mandala */}
            <div className="absolute top-0 right-0 translate-x-[60%] md:translate-x-1/2 w-[600px] h-[600px]">
              <span className="glow-mandala"></span>
              <Image
                src="/images/Mandala.webp"
                alt="Right Mandala"
                width={600}
                height={600}
                className="object-contain w-full h-full relative z-10"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
          </div>

          <Header lang={lang} dictionary={dictionary.header} />
          {children}
          <Footer lang={lang} dictionary={dictionary.footer} />

        </div>

      </body>
    </html>
  );
}
