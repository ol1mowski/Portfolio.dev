import { FC, memo } from 'react';
import s from './techStack.module.scss';
import { SKILLS } from '@/data/Skills.data';
import { TECH_STACK_TITLE } from '../constants/homePageConstants';
import Tech from './Tech/Tech.component';

export const TechStack: FC = memo(() => {
  return (
    <section className={s.techStackContainer} aria-label="Technologie i narzędzia">
      <div className={s.techStackContainer__title}>
        <p className={s.techStackContainer__title__p}>{TECH_STACK_TITLE}</p>
      </div>
      <div className={s.techStackContainer__skillsWrapper} role="list">
        {SKILLS.map(skill => (
          <Tech key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
});

TechStack.displayName = 'TechStack';

export default TechStack;
