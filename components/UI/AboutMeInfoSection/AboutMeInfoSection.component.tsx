import s from './AboutMeInfoSection.component.module.scss';

function AboutMeInfoSection() {
  return (
    <div className={s.contentSection}>
      <h2 className={s.contentSection__h3}>O Mnie</h2>
      <h3 className={s.contentSection__h4}>
        Nazywam się Oliwier Markiewicz,
        <br /> mieszkam w Sieradzu
      </h3>
      <p className={s.contentSection__p}>
        Zajmuję się projektowaniem oraz tworzeniem nowoczesnych i funkcjonalnych
        stron internetowych w technologiach takich jak
        <a
          href="https://wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.contentSection__p__special}>
            {" "}
            Wordpress
          </span>
        </a>
        ,{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <span className={s.contentSection__p__special}>
            Next.js
          </span>
        </a>{" "}
        czy{" "}
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <span className={s.contentSection__p__special}>
            React
          </span>
        </a>
        , które spełniają indywidualne potrzeby klientów.
      </p>
      <p className={s.contentSection__p}>
        Pomagam małym firmą zaistnieć w internecie, oferując kompleksowe
        rozwiązania obejmujące wdrażanie strategii marketingowych, które
        zwiększają widoczność i przyciągają nowych klientów.
      </p>
      <p className={s.contentSection__p}>
        Prowadzę również kanał na{" "}
        <a
          href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.contentSection__p__special}>
            YouTube
          </span>
        </a>{" "}
        gdzie dzielę się wiedzą z zakresu programowania stron internetowych.
      </p>
    </div>
  );
}

export default AboutMeInfoSection;
