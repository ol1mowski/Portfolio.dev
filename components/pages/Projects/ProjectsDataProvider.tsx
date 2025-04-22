import { getProjects } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import Projects from './Projects.page';
import { PROJECTS_FETCH_ERROR_LOG } from './constants/projects.constants';
import { ErrorMessage } from '@/components/UI/shared';

export default async function ProjectsPage() {
  try {
    const projectsData = await getProjects();

    if (!projectsData || !Array.isArray(projectsData) || !projectsData.length) {
      console.error(PROJECTS_FETCH_ERROR_LOG);
      return <ErrorMessage message="Nie udało się pobrać projektów. Przepraszamy za utrudnienia." />;
    }

    return <Projects projects={projectsData} />;
  } catch (error) {
    console.error(PROJECTS_FETCH_ERROR_LOG, error);
    return <ErrorMessage message="Nie udało się pobrać projektów. Przepraszamy za utrudnienia." />;
  }
}
