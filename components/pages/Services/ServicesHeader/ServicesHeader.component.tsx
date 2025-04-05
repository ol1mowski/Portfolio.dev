import { FC, memo } from 'react';
import s from './ServicesHeader.component.module.scss';
import Paragraph from "@/components/UI/Word/Paragraph.component";
import { ServicesHeaderProps } from '@/types/Services.types';

export const ServicesHeader: FC<ServicesHeaderProps> = memo(({ typArr }) => {
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
