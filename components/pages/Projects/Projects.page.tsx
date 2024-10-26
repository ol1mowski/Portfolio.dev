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
          />
        ))}
      </ProjectsWrapper>
    </section>
  );
};

export default Projects;
