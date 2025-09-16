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

      benefits: [],
      teaser: {
        timelineNumber: t('benefits.timeline.number'),
        timelineLabel: t('benefits.timeline.label'),
        expressTitle: t('benefits.express.title'),
        expressDescription: t('benefits.express.description'),
        guaranteeNumber: t('benefits.guarantee.number'),
        guaranteeLabel: t('benefits.guarantee.label'),
        zeroRiskTitle: t('benefits.zeroRisk.title'),
        zeroRiskDescription: t('benefits.zeroRisk.description'),
      },
    }),
    [t]
  );

  return data;
};
