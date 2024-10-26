import Text from '@/components/Utils/Text-component/Text.component';
import s from './HeroCta.component.module.scss';

function HeroCta() {
  return (
    <section className={s.cta}>
      <p className={s.cta__p}>
        <Text textValue="Cześć! Nazywam się Oliwier Markiewicz, pomagam lokalnym firmą zwiększyć sprzedaż poprzez tworzenie nowoczesnych stron internetowych, które wyróżniają się na tle konkurencji 🏆" />
      </p>
      <a href="#services">
        <button className={s.cta__btn}>Zwiększ Swoją Sprzedaż</button>
      </a>
    </section>
  );
}

export default HeroCta;
