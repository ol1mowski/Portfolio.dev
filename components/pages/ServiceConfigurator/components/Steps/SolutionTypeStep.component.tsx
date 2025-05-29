import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { solutionTypes } from '../../constants/ServiceConfigurator.constants';

interface SolutionTypeStepProps {
  selectedType: string;
  onSelect: (type: string) => void;
}

const SolutionTypeStep: React.FC<SolutionTypeStepProps> = ({ selectedType, onSelect }) => {
  return (
    <div className={s.stepContent}>
      <h1 className={s.stepContent__title}>Jakiego typu rozwiązanie preferujesz?</h1>
      <p className={s.stepContent__subtitle}>
        Każda opcja ma swoje zalety - wybierz najlepszą dla siebie
      </p>

      <div className={s.options}>
        {solutionTypes.map(type => (
          <button
            key={type.id}
            className={`${s.optionCard} ${selectedType === type.id ? s.optionCard__selected : ''}`}
            onClick={() => onSelect(type.id)}
          >
            <h3 className={s.optionCard__title}>{type.title}</h3>
            <p className={s.optionCard__desc}>{type.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SolutionTypeStep;
