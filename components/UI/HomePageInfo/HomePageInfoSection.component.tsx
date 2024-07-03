import ScrollLink from "@/components/Utils/ScrollLink.component";
import s from "./HomePageInfoSection.component.module.scss";

import Text from "@/components/Utils/Text-component/Text.component";

function HomePageInfoSection() {
  return (
    <article className={s.content}>
      <h1 className={s.content__h1}>
        Twórca Nowoczesnych
        <br />
        <span className={s.content__h1__underText}>
          Stron Internetowych
          <span className={s.content__h1__underText__decoration}></span>
        </span>
      </h1>

      <section className={s.content__cta}>
        <p className={s.content__cta__p}>
          <Text textValue="Cześć! Nazywam się Oliwier Markiewicz i zajmuję się tworzeniem stron internetowych, które wyróżniają się na tle konkurencji 🏆 😉" />
        </p>
        <ScrollLink link="#services">
          <button className={s.content__cta__btn}>Stwórzmy coś razem</button>
        </ScrollLink>
      </section>
    </article>
  );
}

export default HomePageInfoSection;
