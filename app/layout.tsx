import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Oliwier Markiewicz | Twórca Stron Internetowych',
  description:
    'Oliwier Markiewicz - Twórca Stron Internetowych oferujący profesjonalne usługi projektowania i tworzenia stron WWW...',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
