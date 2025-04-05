import s from "./Services.data.module.scss";
import { type ServiceType } from "@/types/Services.types";

export const SERVICES: ServiceType[] = [
  {
    type: "Strony-Internetowe",
    reverse: false,
    number: 1,
    ifFirst: true,
    des: (
      <span>
        W dzisiejszym świecie internet jest kluczowym narzędziem dla rozwoju
        każdej firmy. Oferuję kompleksową usługę tworzenia zjawiskowych stron
        internetowych, dostosowanych do Twoich indywidualnych potrzeb i celów
        biznesowych. Korzystam z najnowszych technologii, takich jak
        <span className={s.specialTextDecorate}>Webflow</span> czy{" "}
        <span className={s.specialTextDecorate}>Next.js</span>, aby dostarczyć
        nowoczesne, responsywne oraz zoptymalizowane pod kątem SEO witryny.
      </span>
    ),
  },
  {
    type: "Sklepy-Internetowe",
    reverse: true,
    number: 2,
    ifFirst: false,
    des: (
      <span>
        W dzisiejszym konkurencyjnym środowisku e-commerce nowoczesny sklep
        internetowy powinien nie tylko przyciągać klientów swoim wyglądem, ale
        również oferować doskonałe doświadczenia zakupowe, bezpieczeństwo oraz
        wydajność. Specjalizuję się w tworzeniu funkcjonalnych i profesjonalnych
        sklepów internetowych opartych na takich technologiach jak{" "}
        <span className={s.specialTextDecorate}>WordPress</span> (
        <span className={s.specialTextDecorate}>WooCommerce</span>),{" "}
        <span className={s.specialTextDecorate}>Webflow</span> i{" "}
        <span className={s.specialTextDecorate}>Next.js</span>. Każdy projekt
        dostosowany jest do indywidualnych potrzeb biznesowych, aby zwiększyć
        sprzedaż i zapewnić klientom wygodę zakupów online.
      </span>
    ),
  },
  {
    type: "Projekty-Stron Internetowych",
    reverse: false,
    number: 3,
    ifFirst: false,
    des: (
      <span>
        Profesjonalna strona internetowa to podstawowy element budowania
        wizerunku i rozwoju każdej firmy w świecie cyfrowym. Oferuję usługę
        projektowania{" "}
        <span className={s.specialTextDecorate}>
          nowoczesnych stron internetowych UI/UX
        </span>
        , które wyróżniają się nie tylko estetyką, ale również pełną
        funkcjonalnością oraz intuicyjną nawigacją. Specjalizuję się w tworzeniu
        stron dostosowanych do potrzeb klientów, z myślą o ich użytkownikach i
        skutecznej komunikacji marki.
      </span>
    ),
  },
];
