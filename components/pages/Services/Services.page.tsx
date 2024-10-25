import Paragraph from "@/components/UI/Word/Paragraph.component";
import s from "./Services.page.module.scss";

function Services({
  type,
  number,
  ifFirst = false,
  reverse = false,
  des,
}: {
  type: string;
  number: number;
  ifFirst?: boolean;
  reverse?: boolean;
  des: string;
}) {
  const typArr = type.split("-");
  return (
    <section className={`${s.container} ${reverse && s.container_reverse}`}>
      {ifFirst && (
        <div className={s.container__aboutSectionWrapper}>
          <span className={s.container__aboutSectionWrapper__content}>
            Usługi
          </span>
        </div>
      )}
      <div className={s.container__headerWrapper}>
        <h5 className={s.container__headerWrapper__header}>
          <Paragraph
            value={typArr[0]}
            className={s.container__headerWrapper__header}
          />
          <Paragraph
            value={typArr[1]}
            className={s.container__headerWrapper__header}
          />
        </h5>
      </div>{" "}
      <section className={s.container__ctaWrapper}>
        <div className={s.container__ctaWrapper__desWrapper}>
          <p className={s.container__ctaWrapper__desWrapper__des}>
            { des }
          </p>
        </div>
        <div className={s.container__ctaWrapper__buttonWrapper}>
          <button className={s.container__ctaWrapper__buttonWrapper__btn}>
            Skontaktuj Się
          </button>
        </div>
      </section>
      <div className={s.container__slideNumberWrapper}>
        <span className={s.container__slideNumberWrapper__number}>
          0{number}
        </span>
      </div>
    </section>
  );
}

export default Services;
