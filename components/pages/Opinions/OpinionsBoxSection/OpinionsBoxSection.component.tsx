import s from "./OpinionsBoxSection.component.module.scss";

import Image, { type StaticImageData } from "next/image";

function OpinionsBoxSection({ companyLogo }: { companyLogo: StaticImageData }) {
  return (
    <section className={s.contentSection}>
      <h3 className={s.contentSection__h3}>OPINIE</h3>
      <h4 className={s.contentSection__h4}>
        Zobacz Co Myślą O Mnie Moi Klienci
      </h4>
      <a href="https://jmp.sh/s/mNlcSWPwdNWRNFOaei2n" target="_blank">
        <section className={s.contentSection__opinionContainer}>
          <Image
            width={300}
            height={200}
            className={s.contentSection__opinionContainer__img}
            src={companyLogo}
            alt="company logo"
          />

          <section className={s.contentSection__opinionContainer__readWrapper}>
            <span
              className={s.contentSection__opinionContainer__readWrapper__text}
            >
              Przeczytaj{" "}
              <span
                className={
                  s.contentSection__opinionContainer__readWrapper__text__mark
                }
              >
                Opinię
              </span>
            </span>
          </section>
        </section>
      </a>
    </section>
  );
}

export default OpinionsBoxSection;
