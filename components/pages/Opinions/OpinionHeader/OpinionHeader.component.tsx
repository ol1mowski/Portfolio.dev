import Paragraph from '@/components/UI/Word/Paragraph.component';
import s from './OpinionHeader.component.module.scss';

function OpinionHeader() {
  return (
    <div className={s.headerWrapper}>
      <h3 className={s.headerWrapper__header}>
        <Paragraph
          className={s.headerWrapper__header}
          value="Opinie Moich Klientów"
        />
      </h3>
    </div>
  );
}

export default OpinionHeader;
