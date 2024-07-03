import s from "./Help.page.module.scss";

import Service from "./Service/Service.component";
import { SERVICES } from "./Services.data";

function Help() {
  return (
    <section id="services" className={s.container}>
      <section className={s.container__header}>
        <h2 className={s.container__header__title}>Jak Mogę Ci Pomóc ?</h2>
        <span className={s.container__header__line}></span>
      </section>
      <section className={s.container__servicesWrapper}>
        {SERVICES.map((ser) => (
          <Service
            key={ser.id}
            width={ser.width}
            height={ser.height}
            title={ser.title}
            description={ser.description}
            image={ser.image}
          />
        ))}
      </section>
    </section>
  );
}

export default Help;
