import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import type { BusinessImpactData } from '../types/BusinessImpact.types';

export const useBusinessImpactData = (): BusinessImpactData => {
  const t = useTranslations('businessImpact');

  const data = useMemo(
    (): BusinessImpactData => ({
      header: {
        title: t('header.title'),
        subtitle: t('header.subtitle'),
      },
      mainOffer: {
        badge: t('mainOffer.badge'),
        title: t('mainOffer.title'),
        description: t('mainOffer.description'),
        features: [
          t('mainOffer.features.feature1'),
          t('mainOffer.features.feature2'),
          t('mainOffer.features.feature3'),
        ],
      },
      benefits: [
        {
          id: 'timeline',
          type: 'stat',
          icon: 'clock',
          number: t('benefits.timeline.number'),
          label: t('benefits.timeline.label'),
        },
        {
          id: 'express',
          type: 'description',
          icon: 'clock',
          title: t('benefits.express.title'),
          description: t('benefits.express.description'),
        },
        {
          id: 'guarantee',
          type: 'stat',
          icon: 'shield',
          number: t('benefits.guarantee.number'),
          label: t('benefits.guarantee.label'),
        },
        {
          id: 'zero-risk',
          type: 'description',
          icon: 'shield',
          title: t('benefits.zeroRisk.title'),
          description: t('benefits.zeroRisk.description'),
        },
      ],
    }),
    [t]
  );

  return data;
};
