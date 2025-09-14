import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: (namespace: string) => (key: string) => {
    const translations: Record<string, Record<string, string>> = {
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
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/pl',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
  takeRecords: vi.fn(),
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
