import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { TOTAL_STEPS } from '../../constants/ServiceConfigurator.constants';

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className={s.progress}>
      <div className={s.progress__bar}>
        <div
          className={s.progress__fill}
          style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
        ></div>
      </div>
      <div className={s.progress__text}>
        Krok {currentStep} z {TOTAL_STEPS}
      </div>
    </div>
  );
};

export default ProgressBar;
