import { Urbanist } from 'next/font/google';
import { Tenali_Ramakrishna } from 'next/font/google';
import './globals.css';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Tantric Luxe Mallorca",
  "alternateName": "Tantric Luxe",
  "description": "Centro especializado en masaje tantrico Mallorca. Experiencias exclusivas de masaje tantrico en Palma de Mallorca con máxima privacidad y profesionalidad.",
  "url": "https://tu-dominio.com",
  "telephone": "+34-XXX-XXX-XXX",
  "email": "info@tantricluxemallorca.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dirección específica (agregar cuando sea público)",
    "addressLocality": "Palma",
    "addressRegion": "Islas Baleares",
    "postalCode": "07001",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "39.5696",
    "longitude": "2.6502"
  },
  "openingHours": [
    "Mo-Su 11:00-02:00"
  ],
  "priceRange": "€€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card",
  "servedCuisine": [],
  "hasMap": "https://maps.google.com/?q=Palma+de+Mallorca",
  "areaServed": {
    "@type": "City",
    "name": "Palma de Mallorca"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "39.5696",
      "longitude": "2.6502"
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
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
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
      <body className={`${urbanist.variable} ${tenali.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
