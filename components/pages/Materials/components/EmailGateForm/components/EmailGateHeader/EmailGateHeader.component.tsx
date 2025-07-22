import { FC } from 'react';
import s from './EmailGateHeader.component.module.scss';
import { MATERIALS_CONSTANTS } from '../../../../constants/materials.constants';

export const EmailGateHeader: FC = () => {
  const { EMAIL_GATE } = MATERIALS_CONSTANTS;

  return (
    <div className={s.header}>
      <div className={s.lockIcon}>🔐</div>
      <h1 className={s.title}>
        {EMAIL_GATE.TITLE.split(' ')[0]}{' '}
        <span className={s.gradient}>{EMAIL_GATE.TITLE.split(' ').slice(1).join(' ')}</span>
      </h1>
      <p className={s.subtitle}>{EMAIL_GATE.SUBTITLE}</p>
    </div>
  );
};
