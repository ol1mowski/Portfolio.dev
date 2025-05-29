import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { budgets } from '../../constants/ServiceConfigurator.constants';

interface BudgetStepProps {
  selectedBudget: string;
  onSelect: (budget: string) => void;
}

const BudgetStep: React.FC<BudgetStepProps> = ({ selectedBudget, onSelect }) => {
  return (
    <div className={s.stepContent}>
      <h1 className={s.stepContent__title}>Jaki jest Twój budżet?</h1>
      <p className={s.stepContent__subtitle}>Pomoże nam to dopasować najlepszą ofertę</p>

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
