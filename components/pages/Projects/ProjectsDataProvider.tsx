import { useFetchData } from "@/hooks/useFetchData.hook";
import Projects from "./Projects.page";
import { PROJECTS_FETCH_ERROR_LOG } from "./constants/projects.constants";
import { ErrorMessage, Loading } from "@/components/UI/shared";

export default async function ProjectsDataProvider() {
  const projectsData = await useFetchData('projects', PROJECTS_FETCH_ERROR_LOG);

  if (!projectsData) {
    return <ErrorMessage message="Nie udało się pobrać projektów. Przepraszamy za utrudnienia." />;
  }

  return (
    <Projects projects={projectsData} />
  );
} 