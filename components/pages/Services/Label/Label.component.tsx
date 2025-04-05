import { FC, memo } from 'react';
import s from './Label.component.module.scss';
import { LabelProps } from '@/types/Services.types';
import { SERVICES_LABEL_TEXT } from '../constants/services.constants';

export const Label: FC<LabelProps> = memo(({ ifFirst }) => {
  if (!ifFirst) return null;

  return (
    <div 
      className={s.aboutSectionWrapper}
      aria-label="Sekcja usług"
    >
      <span className={s.aboutSectionWrapper__content}>
        {SERVICES_LABEL_TEXT}
      </span>
    </div>
  );
});

Label.displayName = 'Label';

export default Label;
