import s from "./Colaboration.page.module.scss";

import one from "@/assets/wsp_1.svg";
import two from "@/assets/wsp_2.svg";
import three from "@/assets/wsp_3.svg";
import four from "@/assets/wsp_4.svg";
import five from "@/assets/wsp_5.svg";

import Step from "./Step/Step.component";

const STEP = [
  {
    id: 1,
    image: one,
    title: "Konsultacja I Analiza Potrzeb",
    description: `Na początku naszej współpracy przeprowadzam szczegółową konsultację, aby zrozumieć Twoje potrzeby i cele biznesowe. Jako twórca stron internetowych analizuję rynek, Twoją konkurencję oraz grupę docelową, aby móc dostarczyć najlepiej dopasowane rozwiązania.`,
    reverse: false,
  },
  {
    id: 2,
    image: two,
    title: "Projektowanie I Tworzenie Strony",
    description: `Następnie przystępuję do projektowania strony internetowej. Tworzę unikalne projekty graficzne, które są zarówno estetyczne, jak i funkcjonalne. Wykorzystuję najnowsze technologie, aby Twoja strona była nowoczesna i responsywna. Każda strona internetowa, którą tworzę, jest zoptymalizowana pod kątem SEO, co zwiększa jej widoczność w wynikach wyszukiwania.`,
    reverse: true,
  },
  {
    id: 3,
    image: three,
    title: "Testowanie I Wdrożenie",
    description: `Zanim strona internetowa zostanie uruchomiona, przeprowadzam dokładne testy funkcjonalności na różnych urządzeniach i przeglądarkach. Upewniam się, że wszystko działa bez zarzutu, a następnie wdrażam stronę na hosting, dbając o każdy szczegół.`,
    reverse: false,
  },
   {
    id: 4,
    image: four,
    title: "Pozycjonowanie Lokalne i Kampania Marketingowa",
    description: `Przygotowuję i realizuję specjalne strategie marketingowe kampanie marketingowe, dostosowane do specyficznych potrzeb i celów takie jak kampania Google czy Facebook Ads czy pozycjonowanie wizytówki Google Moja Firma, które pomogą w zdobyciu nowych klientów`,
    reverse: true,
  },
  {
    id: 5,
    image: five,
    title: "Szkolenie I Wsparcie",
    description: `Po uruchomieniu strony oferuję szkolenie z jej obsługi oraz zarządzania treściami. Zapewniam również ciągłe wsparcie techniczne. Jestem dostępny, aby odpowiadać na Twoje pytania i pomagać w dalszym rozwijaniu strony oraz działań marketingowych.`,
    reverse: false,
  },
];

function Colaboration() {
  return (
    <section className={s.container}>
      <section className={s.container__contentSection}>
        <h3 className={s.container__contentSection__h3}>WSPÓŁPRACA</h3>
        <h4 className={s.container__contentSection__h4}>
          Zobacz Etapy Współpracy Ze Mną
        </h4>
      </section>
      <section className={s.container__stepWrapper}>
        {STEP.map((step) => (
          <Step
            reverse={step.reverse}
            key={step.id}
            title={step.title}
            image={step.image}
            description={step.description}
          />
        ))}
      </section>
      <section className={s.container__cta}>
        <h3 className={s.container__cta__header}>
          Umów Się na{" "}
          <span className={s.container__cta__header__mark}>Darmową</span>{" "}
          Konsultację
        </h3>
        <a href="tel:+48 693 851 878">
          <button className={s.container__cta__btn}>
            Zadzwoń: 693 851 878
          </button>
        </a>
      </section>
    </section>
  );
}

export default Colaboration;
