import { useMemo } from 'react';
import type { BusinessImpactData } from '../types/BusinessImpact.types';

export const useBusinessImpactData = (): BusinessImpactData => {
  const data = useMemo(
    (): BusinessImpactData => ({
      header: {
        title: 'Nie tylko koduję',
        subtitle: 'Buduję imperium Twojego biznesu',
      },
      mainOffer: {
        badge: '+40% ROI',
        title: 'Zwiększam Twoje zyski o 40%',
        description:
          'Nie robię "tadnych stron". Tworzę maszynę do zarabiania pieniędzy. Moi klienci w ciągu pierwszych 3 miesięcy odnotowują średnio 40% wzrost sprzedaży.',
        features: [
          'Optymalizacja konwersji oparta na danych',
          'A/B testing każdego elementu',
          'Psychologia sprzedaży w każdym pikselu',
        ],
      },
      benefits: [
        {
          id: 'timeline',
          type: 'stat',
          icon: 'clock',
          number: '7-14',
          label: 'dni realizacji',
        },
        {
          id: 'express',
          type: 'description',
          icon: 'clock',
          title: 'Express bez kompromisów',
          description:
            'Podczas gdy inni obiecują "za miesiąc", ja dostarczam gotową stronę w maksymalnie 2 tygodnie. Bez uszczerbku na jakości.',
        },
        {
          id: 'guarantee',
          type: 'stat',
          icon: 'shield',
          number: '100%',
          label: 'gwarancji',
        },
        {
          id: 'zero-risk',
          type: 'description',
          icon: 'shield',
          title: 'Zero ryzyka',
          description:
            '6 miesięcy wsparcia + 30 dni na zwrot pieniędzy. Płacisz dopiero gdy jesteś w 100% zadowolony.',
        },
      ],
    }),
    []
  );

  return data;
};
