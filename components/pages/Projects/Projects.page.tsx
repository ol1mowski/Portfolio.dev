import ProjectComponent from "./ProjectContainer/ProjectContainer.component";
import ProjectHeader from "./ProjectHeader/ProjectHeader.component";
import s from "./Projects.page.module.scss";

import { type ProjectsType, type ProjectType } from "@/types/PostType.type";
import ProjectsWrapper from "./ProjectsWrapper/ProjectsWrapper.component";

const Projects = ({ projects }: { projects: ProjectsType[] }) => {
  if (!projects.length) {
    return <p>[-]No projects available.</p>;
  }

  const projectList = projects[0].projects;

  return (
    <section id="projects" className={s.projectsContainer}>
      <ProjectHeader />
      <ProjectsWrapper>
        {projectList.map(({ id, image, title, date, description, technologies, githubLink, liveLink }: ProjectType) => (
          <ProjectComponent
            id={id}
            key={id}
            image={image}
            title={title}
            date={date}
            description={description}
            technologies={technologies}
            githubLink={githubLink}
            liveLink={liveLink}
          />
        ))}
      </ProjectsWrapper>
    </section>
  );
};

export default Projects;
