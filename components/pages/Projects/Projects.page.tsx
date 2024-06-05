import style from "./Projects.page.module.scss";

import Project from "../../UI/Project/ProjectReverseCheck.component";
import { PROJECTS } from "./Projects.data";

const Projects = () => {
  return (
    <section id="projects" className={style.projectsContainer}>
      <section className={style.projectsContainer__contentSection}>
        <h3 className={style.projectsContainer__contentSection__h3}>
          PROJEKTY
        </h3>
        <h4 className={style.projectsContainer__contentSection__h4}>
          Zobacz Stworzone Przeze Mnie Strony Internetowe
        </h4>
      </section>
      <section className={style.projectsContainer__projectsWrapper}>
        {PROJECTS.map((val) => (
          <Project
            id={val.id}
            key={val.id}
            image={val.image}
            title={val.title}
            date={val.date}
            description={val.description}
            technologies={val.technologies}
            githubLink={val.githubLink}
            liveLink={val.liveLink}
            reverse={val.reverse}
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
