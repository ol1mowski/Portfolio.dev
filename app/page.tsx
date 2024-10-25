
import HomePage from "@/components/pages/HomePage/HomePage.page";

import SubscribersAmount from "@/components/pages/SubscribersAmount/SubscribersAmount.page";
import Contact from "@/components/pages/Contact/Contact.page";
import Footer from "@/components/pages/Footer/Footer.page";
import Opinions from "@/components/pages/Opinions/Opinions.page";
import Projects from "@/components/pages/Projects/Projects.fetching";
import Colaboration from "@/components/pages/Colaboration/Colaboration.page";
import Ebook from "@/components/pages/EBook/Ebook.page";
import AbourMe from "@/components/pages/AboutMe/AbouMe.page";
import Services from "@/components/pages/Services/Services.page";
import CursorShadow from "@/components/UI/CursorShadow/CursorShadow.component";
import Header from "@/components/pages/Header/Header.component";

export default function Home() {
  return (
    <>
      <CursorShadow />
      <Header />
      <HomePage />
      <Ebook />
      <AbourMe />
      <Services
        type="Strony-Internetowe"
        number={1}
        ifFirst
        des="W dzisiejszym świecie internet jest kluczowym narzędziem dla rozwoju
            każdej firmy. Oferuję kompleksową usługę tworzenia zjawiskowych
            stron internetowych, dostosowanych do Twoich indywidualnych potrzeb
            i celów biznesowych. Korzystam z najnowszych technologii, takich jak
            Webflow czy Next.js, aby dostarczyć nowoczesne, responsywne oraz
            zoptymalizowane pod kątem SEO witryny."
      />
      <Services type="Sklepy-Internetowe" number={2} reverse des="W dzisiejszym konkurencyjnym środowisku e-commerce nowoczesny sklep internetowy powinien nie tylko przyciągać klientów swoim wyglądem, ale również oferować doskonałe doświadczenia zakupowe, bezpieczeństwo oraz wydajność. Specjalizuję się w tworzeniu funkcjonalnych i profesjonalnych sklepów internetowych opartych na takich technologiach jak WordPress (WooCommerce), Webflow i Next.js. Każdy projekt dostosowany jest do indywidualnych potrzeb biznesowych, aby zwiększyć sprzedaż i zapewnić klientom wygodę zakupów online."/>
      <Services type="Projekty-Stron Internetowych" number={3} des="Profesjonalna strona internetowa to podstawowy element budowania wizerunku i rozwoju każdej firmy w świecie cyfrowym. Oferuję usługę projektowania nowoczesnych stron internetowych, które wyróżniają się nie tylko estetyką, ale również pełną funkcjonalnością oraz intuicyjną nawigacją. Specjalizuję się w tworzeniu stron dostosowanych do potrzeb klientów, z myślą o ich użytkownikach i skutecznej komunikacji marki."/>
      <SubscribersAmount />
      <Projects />
      <Opinions />
      <Colaboration />
      <Contact />
      <Footer />
    </>
  );
}
