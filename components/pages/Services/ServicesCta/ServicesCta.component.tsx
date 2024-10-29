import { type ReactNode } from 'react';
import s from './ServicesCta.component.module.scss';

function ServicesCta({ des }: { des: ReactNode }) {
  return (
    <section className={s.ctaWrapper}>
      <div className={s.ctaWrapper__desWrapper}>
        <p className={s.ctaWrapper__desWrapper__des}>{des}</p>
      </div>
      <div className={s.ctaWrapper__buttonWrapper}>
        <button className={s.ctaWrapper__buttonWrapper__btn}>
          Skontaktuj Się
        </button>
      </div>
    </section>
  );
}

export default ServicesCta;
