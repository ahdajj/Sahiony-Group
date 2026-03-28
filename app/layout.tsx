import type { Metadata } from 'next';
import { Cinzel, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sahiony Group',
  description: 'Sahiony Group - HTA Construction & Trading in Qatar and SEC Engineering & Contracting in Syria.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cinzel.variable}`}>{children}</body>
    </html>
  );
}
