import Paragraph from '@/components/UI/Word/Paragraph.component';
import s from './InfoHeader.component.module.scss';

function InfoHeader() {
  return (
    <section className={s.headerContainer}>
      <div className={s.headerContainer__sectionInfoWrapper}>
        <span className={s.headerContainer__sectionInfoWrapper__content}>O Mnie</span>
      </div>
      <div className={s.headerContainer__headerWrapper}>
        <h3 className={s.headerContainer__headerWrapper__header}>
          <Paragraph
            className={s.headerContainer__headerWrapper__header}
            value="Cześć, Nazywam się"
          />{' '}
          <br />{' '}
          <Paragraph
            className={s.headerContainer__headerWrapper__header}
            value="Oliwier Markiewicz"
          />
        </h3>
      </div>
    </section>
  );
}

export default InfoHeader;
