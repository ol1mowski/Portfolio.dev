import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { availableFeatures } from '../../constants/ServiceConfigurator.constants';

interface FeaturesStepProps {
  selectedFeatures: string[];
  onToggle: (feature: string) => void;
}

const FeaturesStep: React.FC<FeaturesStepProps> = ({ selectedFeatures, onToggle }) => {
  return (
    <div className={s.stepContent}>
      <h1 className={s.stepContent__title}>Jakie funkcjonalności Cię interesują?</h1>
      <p className={s.stepContent__subtitle}>
        Wybierz wszystkie, które mogą być przydatne (opcjonalne)
      </p>

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
