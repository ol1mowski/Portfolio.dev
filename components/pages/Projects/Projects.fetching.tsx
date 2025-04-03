import { getProjects } from "@/db/Utils/DataFetchingFunctions/DataFetchingFunctions";
import { Projects } from "./Projects.page";
import { ProjectType } from "@/types/PostType.type";
import { 
  PROJECTS_FETCH_ERROR_LOG, 
  PROJECTS_FETCH_ERROR_MESSAGE 
} from './constants/projects.constants';

export const ProjectsFetching = async () => {
  try {
    const fetchedItems = (await getProjects()) as unknown as ProjectType;

    if (!Array.isArray(fetchedItems) || !fetchedItems.length) {
      throw new Error("No data received from the server.");
    }

    return <Projects projects={fetchedItems} />;
  } catch (error) {
    console.error(PROJECTS_FETCH_ERROR_LOG, error);
    return <p>{PROJECTS_FETCH_ERROR_MESSAGE}</p>;
  }
};

export default ProjectsFetching;

