import s from "./AboutMeInfoSection.component.module.scss";

function AboutMeInfoSection() {
  return (
    <div className={s.contentSection}>
      <h2 className={s.contentSection__h3}>O Mnie</h2>
      <h3 className={s.contentSection__h4}>Nazywam się Oliwier Markiewicz</h3>
      <p className={s.contentSection__p}>
        Zajmuję się projektowaniem oraz tworzeniem nowoczesnych i funkcjonalnych
        stron internetowych w technologiach takich jak
        <a
          href="https://webflow.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.contentSection__p__special}> Webflow</span>
        </a>
        ,{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <span className={s.contentSection__p__special}>Next.js</span>
        </a>{" "}
        czy{" "}
        <a
          href="https://wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.contentSection__p__special}> WordPress</span>
        </a>
        , które spełniają indywidualne potrzeby klientów.
      </p>
      <p className={s.contentSection__p}>
        Pomagam małym firmą zaistnieć w internecie, oferując kompleksowe
        rozwiązania obejmujące wdrażanie strategii marketingowych, takich jak
        Reklama
        <a
          href="https://ads.google.com/home/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.contentSection__p__special}> Google Ads</span>
        </a>
        ,{" "}
        <a
          href="https://pl-pl.facebook.com/business/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.contentSection__p__special}>Facebook Ads</span>
        </a>{" "}
        czy{" "}
        <a
          href="https://www.google.com/intl/pl_pl/business/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.contentSection__p__special}>
            Pozycjonowanie wizytówki Google Moja Firma
          </span>
        </a>{" "}
        które zwiększają widoczność i przyciągają nowych klientów.
      </p>
      <p className={s.contentSection__p}>
        Prowadzę również kanał na{" "}
        <a
          href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.contentSection__p__special}>YouTube</span>
        </a>{" "}
        gdzie dzielę się wiedzą z zakresu programowania oraz tworzenia stron
        internetowych.
      </p>
    </div>
  );
}

export default AboutMeInfoSection;
