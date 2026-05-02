import type { Metadata } from 'next';
import { Barlow_Condensed, Barlow, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ECGCanvas from '@/components/ECGCanvas';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MediEvac — Worldwide Medical Transfers & Emergency Medical Support',
  description:
    'MediEvac delivers world-class air ambulance, medical repatriation, and emergency medical support services across the globe — operated by RescAeroMed Aviation Private Limited.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${barlow.variable} ${dmSerif.variable}`}>
      <body>
        <ECGCanvas />
        <Navigation />
        <div className="page-wrapper">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
