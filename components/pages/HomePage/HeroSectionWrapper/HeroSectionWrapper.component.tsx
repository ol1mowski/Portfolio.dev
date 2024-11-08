import { type ReactNode } from 'react'
import s from './HeroSectionWrapper.component.module.scss';

function HeroSectionWrapper({ children }: { children: ReactNode }) {
  return (
    <section id="home" className={s.homeContainer}>
        { children }
    </section>
  )
}

export default HeroSectionWrapper
