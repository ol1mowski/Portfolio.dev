import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { getLocale } from 'next-intl/server';
import Script from 'next/script';
import RootLayoutClient from './RootLayoutClient';

export const metadata: Metadata = {
  title: 'Oliwier Markiewicz | Twórca Stron Internetowych',
  description:
    'Oliwier Markiewicz - Twórca Stron Internetowych oferujący profesjonalne usługi projektowania i tworzenia stron WWW...',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              id="ga-loader"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
