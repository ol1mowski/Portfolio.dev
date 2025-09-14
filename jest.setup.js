// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock next-intl
jest.mock('next-intl', () => ({
  useTranslations: namespace => key => {
    const translations = {
      blog: {
        latestArticles: 'Najnowsze artykuły',
        discoverTrends: 'Odkryj trendy',
        loadMore: {
          button: 'Więcej',
        },
        loadingCategories: 'Ładowanie kategorii...',
        categories: 'Kategorie',
        latestPosts: 'Najnowsze posty',
      },
      opinions: {
        title: 'Opinie',
        subtitle: 'Ostatnie Opinie Moich Klientów',
      },
      navigation: {
        home: 'Home',
        about: 'O mnie',
        projects: 'Projekty',
        blog: 'Blog',
        opinions: 'Opinie',
        contact: 'Kontakt',
      },
    };

    const namespaceTranslations = translations[namespace];
    if (namespaceTranslations) {
      // Handle nested keys like 'loadMore.button'
      const keys = key.split('.');
      let result = namespaceTranslations;
      for (const k of keys) {
        result = result?.[k];
      }
      return result || key;
    }

    return key;
  },
  useLocale: () => 'pl',
  NextIntlClientProvider: ({ children }) => children,
}));

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/pl',
  useSearchParams: () => new URLSearchParams(),
}));
