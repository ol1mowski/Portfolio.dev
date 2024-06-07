import style from "./contact.module.scss";

const Contact = () => {
  return (
    <>
      <section id="contact" className={style.contactContainer}>
        <div className={style.contactContainer__wrapper}>
          <div className={style.contactContainer__wrapper__title}>
            <h3 className={style.contactContainer__wrapper__title__h3}>
              CONTACT
            </h3>
            <h4 className={style.contactContainer__wrapper__title__h4}>
              Don't be shy! Hit me up! 👇
            </h4>
          </div>
          <div className={style.contactContainer__wrapper__icons}>
            <div className={style.contactContainer__wrapper__icons__icon}>
              <div className={style.contactContainer__wrapper__icons__icon}>
                <div className={style.contactContainer__wrapper__icons__icon}>
                  <span
                    className={
                      style.contactContainer__wrapper__icons__icon__span
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-map-search"
                    >
                      <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                      <path d="M9 4v13"></path>
                      <path d="M15 7v5"></path>
                      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                      <path d="M20.2 20.2l1.8 1.8" />
                    </svg>
                  </span>
                  <div
                    className={
                      style.contactContainer__wrapper__icons__icon__info
                    }
                  >
                    <h3
                      className={
                        style.contactContainer__wrapper__icons__icon__info__h3
                      }
                    >
                      Location
                    </h3>
                    <a
                      href="https://www.google.com/maps/place/Sieradz/@51.6016962,18.6973771,13z/data=!3m1!4b1!4m6!3m5!1s0x471af589786a817f:0x29bb12c99326d34e!8m2!3d51.5956014!4d18.7302994!16zL20vMDIyOG1o?hl=pl-PL&entry=ttu"
                      target="_blank"
                      rel="noreferrer"
                      className={
                        style.contactContainer__wrapper__icons__icon__info__a
                      }
                    >
                      <p
                        className={
                          style.contactContainer__wrapper__icons__icon__info__p
                        }
                      >
                        Sieradz, Poland
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.contactContainer__wrapper__icons__icon}>
              <div className={style.contactContainer__wrapper__icons__icon}>
                <span
                  id={style.mail__icon}
                  className={style.contactContainer__wrapper__icons__icon__span}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-mail"
                  >
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                </span>
                <div
                  id={style.mail}
                  className={style.contactContainer__wrapper__icons__icon__info}
                >
                  <h3
                    className={
                      style.contactContainer__wrapper__icons__icon__info__h3
                    }
                  >
                    Mail
                  </h3>
                  <a
                    href="mailto:oliwier.markiewicz@gmx.co.uk"
                    target="_blank"
                    rel="noreferrer"
                    className={
                      style.contactContainer__wrapper__icons__icon__info__a
                    }
                  >
                    <p
                      className={
                        style.contactContainer__wrapper__icons__icon__info__p
                      }
                    >
                      oliwier.markiewicz@gmx.co.uk
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
