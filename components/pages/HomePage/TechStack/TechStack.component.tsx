import s from "./techStack.module.scss";

import { SKILLS } from "@/data/Skills.data";
import Tech from "./Tech/Tech.component";

const TechStack = () => {
  return (
    <>
      <section className={s.techStackContainer}>
        <div className={s.techStackContainer__title}>
          <p className={s.techStackContainer__title__p}>Narzędzia</p>
        </div>
        <div className={s.techStackContainer__skillsWrapper}>
          {SKILLS.map((skill) => (
            <Tech
              key={skill.id}
              src={skill.src}
              href={skill.href}
              alt={skill.alt}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TechStack;
