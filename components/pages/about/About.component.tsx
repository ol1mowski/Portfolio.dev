import style from "./About.component.module.scss";
import about from "@/assets/author_about.svg";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";
import Image from "next/image";

const About = () => {
  return (
    <AnimationWrapper>
      <div id="about" />
      <section className={style.aboutContainer}>
        <div className={style.aboutContainer__imageSection}>
          <Image
            width={600}
            height={600}
            src={about}
            alt="work place"
            className={style.aboutContainer__imageSection__img}
          />
        </div>
        <div className={style.aboutContainer__contentSection}>
          <h3 className={style.aboutContainer__contentSection__h3}>O Mnie</h3>
          <h4 className={style.aboutContainer__contentSection__h4}>
            Nazywam się Oliwier Markiewicz,
            <br /> mieszkam w Sieradzu
          </h4>
          <p className={style.aboutContainer__contentSection__p}>
            Zajmuję się projektowaniem oraz tworzeniem nowoczesnych i
            funkcjonalnych stron internetowych w technologiach takich jak
            <a
              href="https://wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.aboutContainer__contentSection__p__special}>Wordpress</span></a>, <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.aboutContainer__contentSection__p__special}>Next.js</span></a> czy <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.aboutContainer__contentSection__p__special}>React</span></a>, które spełniają indywidualne potrzeby
            klientów.
          </p>{" "}
          <p className={style.aboutContainer__contentSection__p}>
            Pomagam małym firmą zaistnieć w internecie, oferując kompleksowe
            rozwiązania obejmujące wdrażanie strategii marketingowych, które
            zwiększają widoczność i przyciągają nowych klientów.
          </p>
          <p className={style.aboutContainer__contentSection__p}>
            Prowadzę równie kanał na{" "}
            <a
              href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.aboutContainer__contentSection__p__special}>
                YouTube
              </span>
            </a>{" "}
            gdzie dzielę się wiedzą z zakresu programowania stron internetowych
          </p>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default About;
