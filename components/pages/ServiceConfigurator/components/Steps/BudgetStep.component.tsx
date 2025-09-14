import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { useTranslations } from 'next-intl';

interface BudgetStepProps {
  selectedBudget: string;
  onSelect: (budget: string) => void;
}

const BudgetStep: React.FC<BudgetStepProps> = ({ selectedBudget, onSelect }) => {
  const t = useTranslations('configurator.steps.budget');

  const budgets = [
    { id: 'low', title: t('options.low'), range: [1000, 2000] },
    { id: 'medium', title: t('options.medium'), range: [2000, 10000] },
    { id: 'high', title: t('options.high'), range: [10000, 30000] },
    { id: 'premium', title: t('options.premium'), range: [30000, 100000] },
  ];

  return (
    <div className={s.stepContent}>
      <h1 className={s.stepContent__title}>{t('title')}</h1>
      <p className={s.stepContent__subtitle}>{t('subtitle')}</p>

      <div className={s.options}>
        {budgets.map(budget => (
          <button
            key={budget.id}
            className={`${s.optionCard} ${selectedBudget === budget.id ? s.optionCard__selected : ''}`}
            onClick={() => onSelect(budget.id)}
          >
            <h3 className={s.optionCard__title}>{budget.title}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BudgetStep;
