export const MATERIALS_CONSTANTS = {
  EMAIL_GATE: {
    TITLE: 'Odblokuj Centrum Materiałów',
    SUBTITLE:
      'Podaj swój adres email i uzyskaj natychmiastowy dostęp do wszystkich materiałów edukacyjnych, e-booków i zasobów dla programistów.',
    FORM: {
      TITLE: 'Zacznij już teraz!',
      SUBTITLE: 'Bezpłatny dostęp na zawsze',
      NAME_LABEL: 'Twoje imię',
      NAME_PLACEHOLDER: 'np. Jan Kowalski',
      EMAIL_LABEL: 'Podaj swój adres email',
      EMAIL_PLACEHOLDER: 'np. jan.kowalski@gmail.com',
      SUBMIT_BUTTON: 'Odblokuj dostęp',
      LOADING_BUTTON: 'Odblokowuję...',
    },
    POLICY: {
      CHECKBOX_TEXT: 'Akceptuję',
      PRIVACY_POLICY: 'politykę prywatności',
      AND: 'i',
      COOKIES: 'cookies',
      ERROR: 'Musisz zaakceptować politykę prywatności i cookies',
    },
    FOOTER: {
      PRIVACY: '🔒 Twoje dane są bezpieczne. Nie wysyłamy spamu.',
      GUARANTEE: '✅ 100% bezpłatne.',
    },
    ERRORS: {
      FILL_FIELDS: 'Proszę wypełnić wszystkie pola',
      SAVE_ERROR: 'Wystąpił błąd podczas zapisywania',
      CONNECTION_ERROR: 'Wystąpił błąd połączenia. Spróbuj ponownie.',
    },
    SUCCESS: 'Dostęp odblokowany! Przekierowuję...',
  },
  BENEFITS: {
    LEFT: [
      {
        icon: '📚',
        title: 'Biblioteka wiedzy',
        description: 'Dostęp do 50+ e-booków, notatek i praktycznych przewodników',
      },
      {
        icon: '🚀',
        title: 'Ekskluzywne treści',
        description: 'Pierwsze spojrzenie na nowe materiały i beta wersje',
      },
      {
        icon: '💎',
        title: 'Premium zasoby',
        description: 'Szablony, checklist i gotowe rozwiązania do projektów',
      },
    ],
    RIGHT: [
      {
        icon: '💡',
        title: 'Cotygodniowe wskazówki',
        description: 'Najlepsze praktyki programowania prosto na email',
      },
      {
        icon: '🎯',
        title: 'Spersonalizowane ścieżki',
        description: 'Materiały dostosowane do Twojego poziomu zaawansowania',
      },
      {
        icon: '🔥',
        title: 'Aktualne trendy',
        description: 'Najnowsze technologie, narzędzia i trendy w branży IT',
      },
    ],
  },
} as const;
