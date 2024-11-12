import { memo } from 'react';
import s from './Label.component.module.scss';

interface LabelProps {
  ifFirst: boolean;
}

const Label = memo(({ ifFirst }: LabelProps) => {
  if (!ifFirst) return null;

  return (
    <div 
      className={s.aboutSectionWrapper}
      aria-label="Sekcja usług"
    >
      <span className={s.aboutSectionWrapper__content}>
        Usługi
      </span>
    </div>
  );
});

Label.displayName = 'Label';

export default Label;
