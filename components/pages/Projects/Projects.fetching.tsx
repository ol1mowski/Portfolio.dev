import { getProjects } from "@/db/db_connect";

import ProjectsComponent from "./Projects.page";
import { type ProjectType } from "@/types/PostType.type";

async function Projects() {
  try {
    const fetchedItems = (await getProjects()) as unknown as ProjectType;

    if (!Array.isArray(fetchedItems) || !fetchedItems.length) {
      throw new Error("No data received from the server.");
    }

    return <ProjectsComponent projects={fetchedItems} />;
  } catch (error) {
    console.error("Error fetching Projects data:", error);
    return <p>Error loading Projects section.</p>;
  }
}

export default Projects;
