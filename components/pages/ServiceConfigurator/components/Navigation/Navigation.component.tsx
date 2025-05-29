import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { TOTAL_STEPS } from '../../constants/ServiceConfigurator.constants';

interface NavigationProps {
  currentStep: number;
  isStepValid: boolean;
  onPrevStep: () => void;
  onNextStep: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentStep,
  isStepValid,
  onPrevStep,
  onNextStep,
}) => {
  return (
    <div className={s.navigation}>
      {currentStep > 1 && (
        <button className={s.navigation__back} onClick={onPrevStep}>
          ← Wstecz
        </button>
      )}
      <button className={s.navigation__next} onClick={onNextStep} disabled={!isStepValid}>
        {currentStep === TOTAL_STEPS ? 'Zobacz rekomendację' : 'Dalej'} →
      </button>
    </div>
  );
};

export default Navigation;
