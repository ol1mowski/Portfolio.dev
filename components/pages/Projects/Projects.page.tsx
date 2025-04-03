import { FC, memo } from 'react';
import s from "./Projects.page.module.scss";
import { ProjectType } from "@/types/PostType.type";
import { useDynamicImport } from './hooks/useDynamicImport.hook';
import { useProjectsSorting } from './hooks/useProjectsSorting.hook';
import { ProjectsComponentProps } from './types/projects.types';
import { 
  PROJECTS_ERROR_MESSAGE, 
  PROJECTS_LOADING_MESSAGE, 
  PROJECTS_SECTION_ARIA_LABEL, 
  PROJECTS_SECTION_ID 
} from './constants/projects.constants';
import ProjectHeader from "./ProjectHeader/ProjectHeader.component";
import { ErrorMessage, SectionContainer } from '@/components/UI/shared';

export const Projects: FC<ProjectsComponentProps> = memo(({ projects }) => {
  const { sortProjectsByDate } = useProjectsSorting();
  
  const ProjectComponent = useDynamicImport(
    () => import("./ProjectContainer/ProjectContainer.component"), 
    {
      loading: () => <div>{PROJECTS_LOADING_MESSAGE}</div>
    }
  );
  
  const ProjectsWrapper = useDynamicImport(
    () => import("./ProjectsWrapper/ProjectsWrapper.component")
  );

  if (!projects?.length) {
    return <ErrorMessage message={PROJECTS_ERROR_MESSAGE} className={s.errorMessage} />;
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
        {sortedProjects.map(({ id, technologies, githubLink, liveLink, image, title, description, date }: ProjectType) => (
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
    </SectionContainer>
  );
});

Projects.displayName = 'Projects';

export default Projects;
