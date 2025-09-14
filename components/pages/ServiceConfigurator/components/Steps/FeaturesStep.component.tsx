import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { useTranslations } from 'next-intl';

interface FeaturesStepProps {
  selectedFeatures: string[];
  onToggle: (feature: string) => void;
}

const FeaturesStep: React.FC<FeaturesStepProps> = ({ selectedFeatures, onToggle }) => {
  const t = useTranslations('configurator.steps.features');

  const availableFeatures = t.raw('options') as string[];

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
