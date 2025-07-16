export const UNSUBSCRIBE_CONSTANTS = {
  HOW_TO_UNSUBSCRIBE: {
    title: 'Jak zrezygnować?',
    items: [
      'Kliknij link "Wypisz się" w ostatnim otrzymanym mailu',
      'Lub odpowiedz na dowolny mail z prośbą o rezygnację',
      'Lub skontaktuj się z nami bezpośrednio',
    ],
  },
  WHAT_HAPPENS_AFTER: {
    title: 'Co się stanie po rezygnacji?',
    items: [
      'Twój adres email zostanie usunięty z naszej bazy danych',
      'Przestaniesz otrzymywać nasze wiadomości',
      'Nie będziesz już otrzymywać powiadomień o nowych materiałach',
      'Możesz w każdej chwili ponownie dołączyć do bazy danych',
    ],
  },
  TITLES: {
    main: 'Rezygnacja z bazy danych',
    withToken: 'Potwierdź rezygnację z otrzymywania wiadomości',
    withoutToken:
      'Aby zrezygnować z otrzymywania wiadomości, użyj linku z ostatniego maila lub skontaktuj się z nami.',
  },
  BUTTONS: {
    submit: 'Zrezygnuj z bazy danych',
    loading: 'Przetwarzanie...',
  },
  LABELS: {
    token: 'Token bezpieczeństwa:',
  },
  PLACEHOLDERS: {
    token: 'Token z linku',
  },
  POLICY: {
    checkbox: 'Akceptuję',
    privacyPolicy: 'politykę prywatności',
    and: 'i',
    cookies: 'cookies',
    error: 'Musisz zaakceptować politykę prywatności i cookies',
  },
} as const;
