'use client';

import { useEffect } from 'react';
import s from './Projects.page.module.scss';
import { ProjectType } from '@/types/PostType.types';
import { PROJECTS_SECTION_ARIA_LABEL, PROJECTS_SECTION_ID } from './constants/projects.constants';
import ProjectHeader from './ProjectHeader/ProjectHeader.component';
import ProjectContainer from './ProjectContainer/ProjectContainer.component';
import ProjectsWrapper from './ProjectsWrapper/ProjectsWrapper.component';
import { SectionContainer, Loading, ErrorMessage } from '@/components/UI/shared';
import { monthsMap } from '@/consts/Date';
import { useProjectsData } from './hooks/useProjectsData.hook';

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
  const { projects: fetchedProjects, loading, error, fetchProjects } = useProjectsData();

  useEffect(() => {
    if (!projects || !projects.length || !projects[0]?.projects) {
      fetchProjects();
    }
  }, [projects, fetchProjects]);

  const projectList = projects?.[0]?.projects || fetchedProjects;

  if (!projectList || !projectList.length) {
    return (
      <SectionContainer
        id={PROJECTS_SECTION_ID}
        className={s.projectsContainer}
        ariaLabel={PROJECTS_SECTION_ARIA_LABEL}
      >
        <ProjectHeader />
        {loading ? (
          <Loading message="Ładowanie projektów..." />
        ) : error ? (
          <ErrorMessage message={error} variant="page" showRetry onRetry={fetchProjects} />
        ) : (
          <div role="alert">Brak dostępnych projektów</div>
        )}
      </SectionContainer>
    );
  }

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
