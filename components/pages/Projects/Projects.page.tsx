import s from "./Projects.page.module.scss";
import { ProjectType } from "@/types/PostType.types";
import { useDynamicImport } from './hooks/useDynamicImport.hook';
import { useProjectsSorting } from './hooks/useProjectsSorting.hook';
import { useFetchData } from '@/hooks/useFetchData.hook';
import { 
  PROJECTS_FETCH_ERROR_LOG,
  PROJECTS_FETCH_ERROR_MESSAGE,
  PROJECTS_LOADING_MESSAGE, 
  PROJECTS_SECTION_ARIA_LABEL, 
  PROJECTS_SECTION_ID 
} from './constants/projects.constants';
import ProjectHeader from "./ProjectHeader/ProjectHeader.component";
import { SectionContainer } from '@/components/UI/shared';

const Projects = async () => {
  const { sortProjectsByDate } = useProjectsSorting();
  const projectsData = await useFetchData('projects', PROJECTS_FETCH_ERROR_LOG);

  if (!projectsData) {
    return <p>{PROJECTS_FETCH_ERROR_MESSAGE}</p>;
  }

  const ProjectComponent = useDynamicImport(
    () => import("./ProjectContainer/ProjectContainer.component"), 
    {
      loading: () => <div>{PROJECTS_LOADING_MESSAGE}</div>
    }
  );
  
  const ProjectsWrapper = useDynamicImport(
    () => import("./ProjectsWrapper/ProjectsWrapper.component")
  );

  const projectList = projectsData[0].projects;
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
};

export default Projects;
