import { useMemo } from 'react';
import type { ProfitabilitySectionData } from '../types/ProfitabilitySection.types';

export const useProfitabilityData = (): ProfitabilitySectionData => {
  const data = useMemo(
    (): ProfitabilitySectionData => ({
      header: {
        title: 'Ale czy to się opłaci?',
        subtitle: 'Rozumiem Twoje wątpliwości. Oto brutalna prawda:',
      },
      content: [
        {
          id: 'expensive',
          type: 'objection',
          icon: 'plus',
          iconColor: 'red',
          title: 'To za drogie',
          subtitle: 'Najczęstsza obiekcja',
          benefits: [
            'Zwrot w 2-3 miesiące',
            'Profesjonalna strona to inwestycja, nie koszt',
            'Oszczędzasz 100+ godzin',
            'Twój czas jest wart więcej niż myślisz',
            'Unikasz kosztownych błędów',
            'Jeden błąd może kosztować więcej niż cała strona',
          ],
          position: 'left',
        },
        {
          id: 'roi-time',
          type: 'stat',
          number: '2-3 mies.',
          label: 'czas zwrotu inwestycji',
          description: 'Średni czas, po którym klienci odnotowują zwrot inwestycji',
          color: 'blue',
          icon: '📈',
          position: 'right',
        },
        {
          id: 'no-time',
          type: 'objection',
          icon: 'time',
          iconColor: 'orange',
          title: 'Nie mam czasu',
          subtitle: 'Właśnie dlatego powinieneś zacząć',
          benefits: [
            'Każdy dzień = straceni klienci',
            'Twoja konkurencja nie śpi',
            'Ja robię wszystko za Ciebie',
            'Ty tylko akceptujesz gotowe rozwiązania',
            'Maksymalnie 30 minut tygodniowo',
            'Mniej niż jeden odcinek serialu',
          ],
          position: 'left',
        },
        {
          id: 'time-weekly',
          type: 'stat',
          number: '30 min',
          label: 'tygodniowo Twojego czasu',
          description: 'Maksymalny czas, jakiego potrzebuję od Ciebie w trakcie projektu',
          color: 'orange',
          icon: '⏱️',
          position: 'right',
        },
        {
          id: 'no-budget',
          type: 'objection',
          icon: 'plus',
          iconColor: 'blue',
          title: 'Nie mam budżetu',
          subtitle: 'Myślisz krótkookresowo',
          benefits: [
            'Tracisz klientów każdego dnia',
            'Konkurencja cię wyprzedza',
            'Inwestycja zwraca się w 2 miesiące',
            'Możliwość rozłożenia płatności',
            'Lepiej zacząć dziś niż za rok',
          ],
          position: 'left',
        },
        {
          id: 'satisfaction',
          type: 'stat',
          number: '100%',
          label: 'gwarancji zadowolenia',
          description: '30 dni na zwrot pieniędzy jeśli nie jesteś zadowolony',
          color: 'green',
          icon: '✅',
          position: 'right',
        },
        {
          id: 'too-risky',
          type: 'objection',
          icon: 'chart',
          iconColor: 'red',
          title: 'To zbyt ryzykowne',
          subtitle: 'Zero ryzyka dla Ciebie',
          benefits: [
            '30 dni gwarancji zwrotu pieniędzy',
            '6 miesięcy bezpłatnego wsparcia',
            'Hosting i domena w cenie na rok',
            'Backup codziennie',
            'SSL i zabezpieczenia',
            'Nie płacisz dopóki nie jesteś zadowolony',
          ],
          position: 'left',
        },
        {
          id: 'conversion',
          type: 'stat',
          number: '400%',
          label: 'wzrost konwersji',
          description: 'Średni wzrost sprzedaży po wdrożeniu nowej strony',
          color: 'purple',
          icon: '🚀',
          position: 'right',
        },
      ],
    }),
    []
  );

  return data;
};
