import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

interface FeaturesStepProps {
  selectedFeatures: string[];
  onToggle: (feature: string) => void;
  projectType: string;
}

const FeaturesStep: React.FC<FeaturesStepProps> = ({ selectedFeatures, onToggle, projectType }) => {
  const t = useOptimizedTranslations('configurator.steps.features');

  const allFeatures = t('options') as unknown as string[];
  const typeToFeatureIndexes: Record<string, number[]> = {
    website: [0, 1, 5, 6],
    ecommerce: [0, 1, 2, 3],
    webapp: [0, 3, 9, 10],
    blog: [0, 9, 10, 11],
  };
  const indexes = typeToFeatureIndexes[projectType] ?? [];
  const availableFeatures = indexes.map(i => allFeatures[i]).filter(Boolean);

  return (
    <div className={s.stepContent}>
      <h1 className={s.stepContent__title}>{t('title')}</h1>
      <p className={s.stepContent__subtitle}>{t('subtitle')}</p>

      <div className={s.features}>
        {availableFeatures.map(feature => (
          <button
            key={feature}
            className={`${s.featureTag} ${selectedFeatures.includes(feature) ? s.featureTag__selected : ''}`}
            onClick={() => onToggle(feature)}
          >
            {feature}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturesStep;
