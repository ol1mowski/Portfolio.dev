import s from './CollaborationCta.component.module.scss';

function ColaborationCta() {
  return (
    <section className={s.cta}>
      <h3 className={s.cta__header}>
        Umów Się na{" "}
        <span className={s.cta__header__mark}>Darmową</span>{" "}
        Konsultację
      </h3>
      <a href="tel:+48 693 851 878">
        <button className={s.cta__btn}>Zadzwoń: 693 851 878</button>
      </a>
    </section>
  );
}

export default ColaborationCta;
