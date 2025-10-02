import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

interface SolutionTypeStepProps {
  selectedType: string;
  onSelect: (type: string) => void;
}

const SolutionTypeStep: React.FC<SolutionTypeStepProps> = ({ selectedType, onSelect }) => {
  const t = useOptimizedTranslations('configurator.steps.solutionType');

  const solutionTypes = [
    { id: 'template', title: t('options.template.title'), desc: t('options.template.desc') },
    {
      id: 'semi-custom',
      title: t('options.semi-custom.title'),
      desc: t('options.semi-custom.desc'),
    },
    { id: 'custom', title: t('options.custom.title'), desc: t('options.custom.desc') },
  ];

  return (
    <div className={s.stepContent}>
      <h1 className={s.stepContent__title}>{t('title')}</h1>
      <p className={s.stepContent__subtitle}>{t('subtitle')}</p>

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
