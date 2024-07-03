import style from "./Contact.page.module.scss";

import ContactInfoSection from "./ContactInfoSection/ContactInfoSection.component";
import ContectHeaderSection from "./ContectHeaderSection/ContectHeaderSection.component";

const Contact = () => {
  return (
    <>
      <section id="contact" className={style.contactContainer}>
        <div className={style.contactContainer__wrapper}>
          <ContectHeaderSection />
          <div className={style.contactContainer__wrapper__icons}>
            <ContactInfoSection
              link="tel: +48 693 851 878"
              title="Telefon"
              content="+48 693 851 878"
            />
            <ContactInfoSection
              link="mailto:oliwier.markiewicz.dev@gmail.com"
              title="Mail"
              content="oliwier.markiewicz.dev@gmail.com"
            />
            <ContactInfoSection
              link="https://www.google.com/maps/place/Sieradz/@51.6016962,18.6973771,13z/data=!3m1!4b1!4m6!3m5!1s0x471af589786a817f:0x29bb12c99326d34e!8m2!3d51.5956014!4d18.7302994!16zL20vMDIyOG1o?hl=pl-PL&entry=ttu"
              title="Lokalizacja"
              content="Sieradz, Polska"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
