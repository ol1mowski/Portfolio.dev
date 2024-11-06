import Button from "@/components/UI/Button/Button.component";
import s from "./CollaborationCta.component.module.scss";

function ColaborationCta() {
  return (
    <section className={s.cta}>
      <h3 className={s.cta__header}>
        Umów Się na <span className={s.cta__header__mark}>Darmową</span>{" "}
        Konsultację
      </h3>
      <a href="tel:+48 693 851 878">
        <Button type="normal" value="Zadzwoń: 693 851 878" />
      </a>
    </section>
  );
}

export default ColaborationCta;
