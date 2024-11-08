import { type ReactNode } from 'react'
import s from './ServicesWrapper.component.module.scss';

function ServicesWrapper({ children, reverse }: { children: ReactNode, reverse: boolean}) {
  return (
     <section id='services' className={`${s.container} ${reverse && s.container_reverse}`}>
        { children }
     </section>
  )
}

export default ServicesWrapper