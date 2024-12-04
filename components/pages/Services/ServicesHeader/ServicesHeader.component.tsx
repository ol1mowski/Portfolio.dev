import s from './ServicesHeader.component.module.scss';

import { memo } from 'react';
import Paragraph from "@/components/UI/Word/Paragraph.component";

interface ServicesHeaderProps {
  typArr: string[];
}

const ServicesHeader = memo(({ typArr }: ServicesHeaderProps) => {
  return (
    <div className={s.headerWrapper}>
      <h2 className={s.headerWrapper__header}>
        {typArr.map((text, index) => (
          <Paragraph
            key={`${text}-${index}`}
            value={text}
            className={s.headerWrapper__header}
          />
        ))}
      </h2>
    </div>
  );
});

ServicesHeader.displayName = 'ServicesHeader';

export default ServicesHeader;
