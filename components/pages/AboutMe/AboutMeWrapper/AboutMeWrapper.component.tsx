import { type ReactNode } from 'react';
import s from './AboutMeWrapper.component.module.scss';

function AboutMeWrapper({ children }: {children: ReactNode}) {
  return (
     <section id="about" className={s.container}>
        { children }
     </section>
  )
}

export default AboutMeWrapper
