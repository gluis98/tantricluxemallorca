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
      <body className={`${urbanist.variable} ${tenali.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
