'use client';

import s from './Projects.page.module.scss';
import { ProjectType } from '@/types/PostType.types';
import { PROJECTS_SECTION_ARIA_LABEL, PROJECTS_SECTION_ID } from './constants/projects.constants';
import ProjectHeader from './ProjectHeader/ProjectHeader.component';
import ProjectContainer from './ProjectContainer/ProjectContainer.component';
import ProjectsWrapper from './ProjectsWrapper/ProjectsWrapper.component';
import { SectionContainer } from '@/components/UI/shared';
import { monthsMap } from '@/consts/Date';

export type ProjectsData = {
  projects: ProjectType[];
};

interface ProjectsProps {
  projects?: ProjectsData[];
}

const sortProjectsByDate = (projects: ProjectType[]): ProjectType[] => {
  return [...projects].sort((a, b) => {
    const [monthA, yearA] = a.date.toLowerCase().split(' ');
    const [monthB, yearB] = b.date.toLowerCase().split(' ');

    const dateA = new Date(parseInt(yearA), monthsMap[monthA]);
    const dateB = new Date(parseInt(yearB), monthsMap[monthB]);

    return dateB.getTime() - dateA.getTime();
  });
};

const Projects = ({ projects = [] }: ProjectsProps) => {
  if (!projects || !projects.length || !projects[0]?.projects) {
    return (
      <SectionContainer
        id={PROJECTS_SECTION_ID}
        className={s.projectsContainer}
        ariaLabel={PROJECTS_SECTION_ARIA_LABEL}
      >
        <ProjectHeader />
        <div role="alert">No projects available</div>
      </SectionContainer>
    );
  }

  const projectList = projects[0].projects;
  const sortedProjects = sortProjectsByDate(projectList);

  return (
    <SectionContainer
      id={PROJECTS_SECTION_ID}
      className={s.projectsContainer}
      ariaLabel={PROJECTS_SECTION_ARIA_LABEL}
    >
      <ProjectHeader />
      <ProjectsWrapper>
        {sortedProjects.map((project: ProjectType) => (
          <ProjectContainer
            key={project.id}
            id={project.id}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            image={project.image}
            title={project.title}
            description={project.description}
            date={project.date}
          />
        ))}
      </ProjectsWrapper>
    </SectionContainer>
  );
};

export default Projects;
