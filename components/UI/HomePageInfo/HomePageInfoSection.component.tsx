import s from "./HomePageInfoSection.component.module.scss";

import Text from "@/components/Utils/Text-component/Text.component";

function HomePageInfoSection() {
  return (
    <article className={s.content}>
      <h1 className={s.content__h1}>
        Twórca <br />
        <span className={s.content__h1__underText}>
          Stron Internetowych
          <span className={s.content__h1__underText__decoration}></span>
        </span>
      </h1>
      <p className={s.content__p}>
        <Text textValue="Cześć! Nazywam się Oliwier Markiewicz i zajmuję się tworzeniem stron internetowych, które wyróżniają się na tle konkurencji 🏆 😉" />
      </p>
      <section className={s.content__icons}>
        <a
          className={s.content__icons__a}
          href="https://www.linkedin.com/in/oliwier-markiewicz-47857228a/"
          target="_blank"
          aria-label="Find me on LinkedIn"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-brand-linkedin"
          >
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 11l0 5"></path>
            <path d="M8 8l0 .01"></path>
            <path d="M12 16l0 -5"></path>
            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
          </svg>
        </a>
        <a
          className={s.content__icons__a}
          href="https://github.com/ol1mowski"
          aria-label="Find me on Github"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-brand-github"
          >
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
        </a>
      </section>
    </article>
  );
}

export default HomePageInfoSection;
