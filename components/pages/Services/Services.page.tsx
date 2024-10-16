import s from "./Services.page.module.scss";

function Services() {
  return (
    <section className={s.container}>
      <div className={s.container__aboutSectionWrapper}>
        <span className={s.container__aboutSectionWrapper__content}>
          O Mnie
        </span>
      </div>
      <div className={s.container__headerWrapper}>
        <h5 className={s.container__headerWrapper__header}>
          Strony Internetowe
        </h5>
      </div>{" "}
      <section className={s.container__ctaWrapper}>
        <div className={s.container__ctaWrapper__desWrapper}>
          <p className={s.container__ctaWrapper__desWrapper__des}>
            W dzisiejszym świecie internet jest kluczowym narzędziem dla rozwoju
            każdej firmy. Oferuję kompleksową usługę tworzenia zjawiskowych
            stron internetowych, dostosowanych do Twoich indywidualnych potrzeb
            i celów biznesowych. Korzystam z najnowszych technologii, takich jak{" "}
            <span className={s.container__importantTextDecorate}>Webflow</span>
            czy{" "}
            <span className={s.container__importantTextDecorate}>Next.js</span>,
            aby dostarczyć nowoczesne, responsywne oraz zoptymalizowane pod
            kątem SEO witryny.
          </p>
        </div>
        <div className={s.container__ctaWrapper__buttonWrapper}>
          <button className={s.container__ctaWrapper__buttonWrapper__btn}>
            Skontaktuj Się
          </button>
        </div>
      </section>
      <div className={s.container__slideNumberWrapper}>
        <span className={s.container__slideNumberWrapper__number}>01</span>
      </div>
    </section>
  );
}

export default Services;
