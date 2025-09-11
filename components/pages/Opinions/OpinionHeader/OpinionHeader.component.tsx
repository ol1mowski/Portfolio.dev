import { useTranslations } from 'next-intl';
import Paragraph from '@/components/UI/Word/Paragraph.component';
import s from './OpinionHeader.component.module.scss';

function OpinionHeader() {
  const t = useTranslations('opinions');

  return (
    <div className={s.headerWrapper}>
      <h3 className={s.headerWrapper__header}>
        <Paragraph className={s.headerWrapper__header} value={t('subtitle')} />
      </h3>
    </div>
  );
}

export default OpinionHeader;
