import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./next-intl.config.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  env: {
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  // Konfiguracja dla Dockera - generuje standalone server
  output: 'standalone',
  // Dodajemy basePath jeśli istnieje w środowisku
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Upewniamy się, że SASS moduły są poprawnie importowane
  sassOptions: {
    includePaths: ['./style', './'],
  },
};

export default withNextIntl(nextConfig);
