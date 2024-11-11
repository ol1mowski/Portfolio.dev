import s from "./Projects.page.module.scss";

import { memo } from 'react';
import dynamic from 'next/dynamic';

import ProjectHeader from "./ProjectHeader/ProjectHeader.component";
import type { ProjectsType, ProjectType } from "@/types/PostType.type";


const ProjectComponent = dynamic(() => 
  import("./ProjectContainer/ProjectContainer.component"), {
  loading: () => <div>Loading project...</div>
});

const ProjectsWrapper = dynamic(() => 
  import("./ProjectsWrapper/ProjectsWrapper.component"));

const Projects = memo(({ projects }: { projects: ProjectsType[] }) => {
  if (!projects?.length) {
    return (
      <div role="alert" className={s.errorMessage}>
        No projects available
      </div>
    );
  }

  const projectList = projects[0].projects;

  return (
    <section 
      id="projects" 
      className={s.projectsContainer}
      aria-label="Portfolio projects section"
    >
      <ProjectHeader />
      <ProjectsWrapper>
        {projectList.map(({ id, technologies, githubLink, liveLink, image, title, description, date }: ProjectType) => (
          <ProjectComponent
            key={id}
            id={id}
            technologies={technologies}
            githubLink={githubLink}
            liveLink={liveLink}
            image={image}
            title={title}
            description={description}
            date={date}
          />
        ))}
      </ProjectsWrapper>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
