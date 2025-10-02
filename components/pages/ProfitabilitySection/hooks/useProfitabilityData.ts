import { useMemo } from 'react';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import type { ProfitabilitySectionData } from '../types/ProfitabilitySection.types';

export const useProfitabilityData = (): ProfitabilitySectionData => {
  const t = useOptimizedTranslations('profitability');

  const data = useMemo(
    (): ProfitabilitySectionData => ({
      header: {
        title: t('header.title'),
        subtitle: t('header.subtitle'),
      },
      content: [
        {
          id: 'expensive',
          type: 'objection',
          icon: 'plus',
          iconColor: 'red',
          title: t('objections.expensive.title'),
          subtitle: t('objections.expensive.subtitle'),
          benefits: [
            t('objections.expensive.benefits.benefit1'),
            t('objections.expensive.benefits.benefit2'),
            t('objections.expensive.benefits.benefit3'),
            t('objections.expensive.benefits.benefit4'),
            t('objections.expensive.benefits.benefit5'),
            t('objections.expensive.benefits.benefit6'),
          ],
          position: 'left',
        },
        {
          id: 'roi-time',
          type: 'stat',
          number: t('stats.roiTime.number'),
          label: t('stats.roiTime.label'),
          description: t('stats.roiTime.description'),
          color: 'blue',
          icon: '📈',
          position: 'right',
        },
        {
          id: 'no-time',
          type: 'objection',
          icon: 'time',
          iconColor: 'orange',
          title: t('objections.noTime.title'),
          subtitle: t('objections.noTime.subtitle'),
          benefits: [
            t('objections.noTime.benefits.benefit1'),
            t('objections.noTime.benefits.benefit2'),
            t('objections.noTime.benefits.benefit3'),
            t('objections.noTime.benefits.benefit4'),
            t('objections.noTime.benefits.benefit5'),
            t('objections.noTime.benefits.benefit6'),
          ],
          position: 'left',
        },
        {
          id: 'time-weekly',
          type: 'stat',
          number: t('stats.timeWeekly.number'),
          label: t('stats.timeWeekly.label'),
          description: t('stats.timeWeekly.description'),
          color: 'orange',
          icon: '⏱️',
          position: 'right',
        },
        {
          id: 'no-budget',
          type: 'objection',
          icon: 'plus',
          iconColor: 'blue',
          title: t('objections.noBudget.title'),
          subtitle: t('objections.noBudget.subtitle'),
          benefits: [
            t('objections.noBudget.benefits.benefit1'),
            t('objections.noBudget.benefits.benefit2'),
            t('objections.noBudget.benefits.benefit3'),
            t('objections.noBudget.benefits.benefit4'),
            t('objections.noBudget.benefits.benefit5'),
          ],
          position: 'left',
        },
        {
          id: 'satisfaction',
          type: 'stat',
          number: t('stats.satisfaction.number'),
          label: t('stats.satisfaction.label'),
          description: t('stats.satisfaction.description'),
          color: 'green',
          icon: '✅',
          position: 'right',
        },
        {
          id: 'too-risky',
          type: 'objection',
          icon: 'chart',
          iconColor: 'red',
          title: t('objections.tooRisky.title'),
          subtitle: t('objections.tooRisky.subtitle'),
          benefits: [
            t('objections.tooRisky.benefits.benefit1'),
            t('objections.tooRisky.benefits.benefit2'),
            t('objections.tooRisky.benefits.benefit3'),
            t('objections.tooRisky.benefits.benefit4'),
            t('objections.tooRisky.benefits.benefit5'),
            t('objections.tooRisky.benefits.benefit6'),
          ],
          position: 'left',
        },
        {
          id: 'conversion',
          type: 'stat',
          number: t('stats.conversion.number'),
          label: t('stats.conversion.label'),
          description: t('stats.conversion.description'),
          color: 'purple',
          icon: '🚀',
          position: 'right',
        },
      ],
    }),
    [t]
  );

  return data;
};
