import Image from "next/image";
import s from "./Help.page.module.scss";

import website from "@/assets/website.png";
import marketing from "@/assets/marketing.png";
import social from "@/assets/social.png";
import google from "@/assets/google.png";

function Help() {
  return (
    <section className={s.container}>
      <section className={s.container__header}>
        <h2 className={s.container__header__title}>Jak Mogę Ci Pomóc ?</h2>
        <span className={s.container__header__line}></span>
      </section>
      <section className={s.container__servicesWrapper}>
        <div className={s.container__servicesWrapper__service}>
          <Image
            src={website}
            alt="creating  website services icon"
            width={100}
            height={100}
          />
          <h3 className={s.container__servicesWrapper__service__headerWWW}>
            Strony i Sklpy Internetowe
          </h3>
          <p className={s.container__servicesWrapper__service__description}>
            Tworzę profesjonalne i responsywne strony internetowe oraz sklepy
            online, które pomagają Twojej firmie zaistnieć w sieci.
          </p>
        </div>
        <div className={s.container__servicesWrapper__service}>
          <Image
            src={marketing}
            alt="online marketing services icon"
            width={64}
            height={64}
          />
          <h3 className={s.container__servicesWrapper__service__header}>
            Marketing Internetowy
          </h3>
          <p className={s.container__servicesWrapper__service__description}>
            Przygotowuję kampanie marketingowe dzięki którym przyciągniesz
            nowych klientów i zwiększysz sprzedaż swoich produktów lub usług.
          </p>
        </div>
        <div className={s.container__servicesWrapper__service}>
          <Image
            src={social}
            alt="management social media services icon"
            width={64}
            height={64}
          />
          <h3 className={s.container__servicesWrapper__service__header}>
            Prowadzenie Social Media
          </h3>
          <p className={s.container__servicesWrapper__service__description}>
            Dzięki profesjonalnemu zarządzaniu Twoimi profilami
            społecznościowymi zyskasz większą widoczność i wzmocnisz więź z
            klientami.
          </p>
        </div>
        <div className={s.container__servicesWrapper__service}>
          <Image
            src={google}
            alt="optymalize google my company services icon"
            width={64}
            height={64}
          />
          <h3 className={s.container__servicesWrapper__service__header}>
            Optymalizacja Wizytówki Google Moja Firma
          </h3>
          <p className={s.container__servicesWrapper__service__description}>
            Oferuję profesjonalną optymalizację wizytówki Google Moja Firma,
            która pozwoli Twojej firmie wyróżnić się w wynikach wyszukiwania
            lokalnego.
          </p>
        </div>
      </section>
    </section>
  );
}

export default Help;
