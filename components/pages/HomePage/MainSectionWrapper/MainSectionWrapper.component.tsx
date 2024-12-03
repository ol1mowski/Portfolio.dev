import { type ReactNode } from 'react'
import s from './MainSectionWrapper.component.module.scss';

export default function MainSectionWrapper({ children }: { children: ReactNode }) {
  return (
    <section className={s.infoSection}>
        { children }
    </section>
  )
}
