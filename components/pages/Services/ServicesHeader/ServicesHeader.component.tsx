import Paragraph from "@/components/UI/Word/Paragraph.component";
import s from './ServicesHeader.component.module.scss';

function ServicesHeader({ typArr }: { typArr: string[] }) {
  return (
    <div className={s.headerWrapper}>
      <h5 className={s.headerWrapper__header}>
        <Paragraph
          value={typArr[0]}
          className={s.headerWrapper__header}
        />
        <Paragraph
          value={typArr[1]}
          className={s.headerWrapper__header}
        />
      </h5>
    </div>
  );
}

export default ServicesHeader;
