import s from "./Footer.component.module.scss";

import Image from "next/image";

import blogLogo from "@/assets/logo.svg";

import ytIcon from "@/assets/yt_icon.svg";
import linkedinIcon from "@/assets/linkedin_icon.svg";
import githubIcon from "@/assets/github_icon.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className={s.container}>
      <section className={s.container__content}>
        <section className={s.container__logoSection}>
          <Link href={"/Blog"}>
            <Image
              className={s.container__logoSection__img}
              src={blogLogo}
              alt="Blog's logo"
              width={150}
              height={150}
            />
          </Link>
        </section>
        <section className={s.container__linksSection}>
          <section className={s.container__linksSection__linksWrapper}>
            <div
              className={s.container__linksSection__linksWrapper__sectionHeader}
            >
              <h3
                className={
                  s.container__linksSection__linksWrapper__sectionHeader__header
                }
              >
                Linki
              </h3>
            </div>
            <div
              className={
                s.container__linksSection__linksWrapper__sectionElementsWrapper
              }
            >
              <ul
                className={
                  s.container__linksSection__linksWrapper__sectionElementsWrapper__listItems
                }
              >
                <li
                  className={
                    s.container__linksSection__linksWrapper__sectionElementsWrapper__listItems__item
                  }
                >
                  <a
                    href="https://justjoin.it/all-locations/javascript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Oferty Pracy
                  </a>
                </li>

                <li
                  className={
                    s.container__linksSection__linksWrapper__sectionElementsWrapper__listItems__item
                  }
                >
                  <a
                    href="https://www.udemy.com/topic/web-development/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kursy IT
                  </a>
                </li>

                <li
                  className={
                    s.container__linksSection__linksWrapper__sectionElementsWrapper__listItems__item
                  }
                >
                  <a
                    href="https://helion.pl/kategorie/webmasterstwo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ksiązki IT
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className={s.container__linksSection__linksWrapper}>
            <div
              className={s.container__linksSection__linksWrapper__sectionHeader}
            >
              <h3
                className={
                  s.container__linksSection__linksWrapper__sectionHeader__header
                }
              >
                Prywatność
              </h3>
            </div>
            <div
              className={
                s.container__linksSection__linksWrapper__sectionElementsWrapper
              }
            >
              <ul
                className={
                  s.container__linksSection__linksWrapper__sectionElementsWrapper__listItems
                }
              >
                <li
                  className={
                    s.container__linksSection__linksWrapper__sectionElementsWrapper__listItems__item
                  }
                >
                  <Link href={"/prywatnosc"}>Polityka Prywatności</Link>
                </li>
              </ul>
            </div>
          </section>
          <section className={s.container__linksSection__linksWrapper}>
            <div
              className={s.container__linksSection__linksWrapper__sectionHeader}
            >
              <h3
                className={
                  s.container__linksSection__linksWrapper__sectionHeader__header
                }
              >
                Znajdź Mnie
              </h3>
            </div>
            <div
              className={
                s.container__linksSection__linksWrapper__sectionElementsWrapper
              }
            >
              <a
                href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={
                    s.container__linksSection__linksWrapper__sectionElementsWrapper__img
                  }
                  src={ytIcon}
                  alt="YouTube Icon"
                  width={50}
                  height={50}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/oliwier-markiewicz-47857228a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={
                    s.container__linksSection__linksWrapper__sectionElementsWrapper__img
                  }
                  src={linkedinIcon}
                  alt="LinkedIn Icon"
                  width={50}
                  height={50}
                />
              </a>
              <a
                href="https://github.com/ol1mowski"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={
                    s.container__linksSection__linksWrapper__sectionElementsWrapper__img
                  }
                  src={githubIcon}
                  alt="GitHub icon"
                  width={47}
                  height={47}
                />
              </a>
            </div>
          </section>
        </section>
      </section>
      <section className={s.container__copyright}>
        <span className={s.container__copyright__content}>
          Copyright © 2024 Made by Oliwier Markiewicz
        </span>
      </section>
    </footer>
  );
}

export default Footer;
