import s from "./AboutMeInfoSection.component.module.scss";

function AboutMeInfoSection() {
  return (
    <div className={s.contentSection}>
      <h2 className={s.contentSection__h3}>O Mnie</h2>
      <h3 className={s.contentSection__h4}>
        Cześć, Nazywam się Oliwier Markiewicz
      </h3>
      <p className={s.contentSection__p}>
        Zajmuję się projektowaniem oraz tworzeniem nowoczesnych i funkcjonalnych
        stron, sklepów i aplikacji internetowych w technologiach takich jak
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
        Pomagam małym firmom zaistnieć w internecie, poprzez
        {" "}

        <a
          href="https://www.google.com/intl/pl_pl/business/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.contentSection__p__special}>
             Pozycjonowanie wizytówki Google Moja Firma
          </span>
        </a>{" "}
        ,które zwiększają widoczność i przyciąga nowych klientów.
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
      <p className={s.contentSection__p}>
        Zobacz Wszystkie Moje Certyfikaty Na Profilu
        <a
          href="https://www.linkedin.com/in/oliwier-markiewicz-47857228a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.contentSection__p__special}> LinkedIn</span>
        </a>
      </p>
    </div>
  );
}

export default AboutMeInfoSection;
