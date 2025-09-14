import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { useTranslations } from 'next-intl';

const TOTAL_STEPS = 5;

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
  const t = useTranslations('configurator.navigation');

  return (
    <div className={s.navigation}>
      {currentStep > 1 && (
        <button className={s.navigation__back} onClick={onPrevStep}>
          {t('back')}
        </button>
      )}
      <button className={s.navigation__next} onClick={onNextStep} disabled={!isStepValid}>
        {currentStep === TOTAL_STEPS ? t('getRecommendation') : t('next')}
      </button>
    </div>
  );
};

export default Navigation;
