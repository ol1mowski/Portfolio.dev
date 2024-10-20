import ScrollLink from "@/components/Utils/ScrollLink.component";
import s from "./HomePageInfoSection.component.module.scss";

import Text from "@/components/Utils/Text-component/Text.component";
import TypingRepleaceAnimation from "../TypingRepleaceAnimation/TypingRepleaceAnimation.component";

function HomePageInfoSection() {
  return (
    <article className={s.content}>
      <h1 className={s.content__h1}>
        Twórca Nowoczesnych
        <br />
        <span className={s.content__h1__underText}>
          <TypingRepleaceAnimation className={s.content__h1} />
          <span className={s.content__h1__underText__decoration}></span>
        </span>
      </h1>

      <section className={s.content__cta}>
        <p className={s.content__cta__p}>
          <Text textValue="Cześć! Nazywam się Oliwier Markiewicz, pomagam lokalnym firmą zwiększyć sprzedaż poprzez tworzenie nowoczesnych stron internetowych, które wyróżniają się na tle konkurencji 🏆" />
        </p>
        <ScrollLink link="#services">
          <button className={s.content__cta__btn}>
            Zwiększ Swoją Sprzedaż
          </button>
        </ScrollLink>
      </section>
    </article>
  );
}

export default HomePageInfoSection;
