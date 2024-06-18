import style from "./Projects.page.module.scss";
import ProjectComponent from "../../UI/Project/ProjectReverseCheck.component";
import { type ProjectType, type ProjectsType } from "@/types/PostType";

const Projects = ({ projects }: { projects: ProjectsType[] }) => {
  if (!projects.length) {
    return <p>[-]No projects available.</p>;
  }

  const projectList = projects[0].projects;

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
        {projectList.map((project: ProjectType) => (
          <ProjectComponent
            id={project.id}
            key={project.id}
            image={project.image}
            title={project.title}
            date={project.date}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            reverse={project.reverse}
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
