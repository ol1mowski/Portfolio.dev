import { FC } from 'react';
import s from './BenefitsSection.component.module.scss';
import { MATERIALS_CONSTANTS } from '../../../../constants/materials.constants';

export const BenefitsSection: FC = () => {
  const { BENEFITS } = MATERIALS_CONSTANTS;

  return (
    <>
      <div className={s.leftBenefits}>
        {BENEFITS.LEFT.map((benefit, index) => (
          <div key={`left-benefit-${benefit.title}-${index}`} className={s.sideBenefitCard}>
            <div className={s.sideBenefitIcon}>{benefit.icon}</div>
            <h3 className={s.sideBenefitTitle}>{benefit.title}</h3>
            <p className={s.sideBenefitDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className={s.rightBenefits}>
        {BENEFITS.RIGHT.map((benefit, index) => (
          <div key={`right-benefit-${benefit.title}-${index}`} className={s.sideBenefitCard}>
            <div className={s.sideBenefitIcon}>{benefit.icon}</div>
            <h3 className={s.sideBenefitTitle}>{benefit.title}</h3>
            <p className={s.sideBenefitDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
