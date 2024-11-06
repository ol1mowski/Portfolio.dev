import Text from "@/components/Utils/Text-component/Text.component";
import s from "./HeroCta.component.module.scss";
import Button from "@/components/UI/Button/Button.component";

function HeroCta() {
  return (
    <section className={s.cta}>
      <p className={s.cta__p}>
        <Text textValue="Cześć! Nazywam się Oliwier Markiewicz, pomagam lokalnym firmom zwiększyć sprzedaż poprzez tworzenie nowoczesnych stron internetowych, które wyróżniają się na tle konkurencji 🏆" />
      </p>
      <a href="#services">
        <Button type="normal" value="Zwiększ Swoją Sprzedaż" />
      </a>
    </section>
  );
}

export default HeroCta;
