import { notFound } from 'next/navigation';
import ProjectDetails from '@/components/pages/ProjectDetails/ProjectDetails.page';
import { getProjects } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { ProjectType } from '@/types/PostType.types';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const projectsData = await getProjects();

  if (!projectsData || !projectsData.length) {
    return {
      title: 'Projekt nie znaleziony',
      description: 'Nie mogliśmy znaleźć szukanego projektu',
    };
  }

  const allProjects: ProjectType[] = [];
  projectsData.forEach(data => {
    if (data.projects && Array.isArray(data.projects)) {
      allProjects.push(...data.projects);
    }
  });

  const currentProject = allProjects.find(
    project => project.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!currentProject) {
    return {
      title: 'Projekt nie znaleziony',
      description: 'Nie mogliśmy znaleźć szukanego projektu',
    };
  }

  return {
    title: `${currentProject.title} | Case Study`,
    description: currentProject.description,
    openGraph: {
      images: [currentProject.image],
    },
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const projectsData = await getProjects();

  if (!projectsData || !projectsData.length) {
    return notFound();
  }

  const allProjects: ProjectType[] = [];
  projectsData.forEach(data => {
    if (data.projects && Array.isArray(data.projects)) {
      allProjects.push(...data.projects);
    }
  });

  const currentProject = allProjects.find(
    project => project.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!currentProject) {
    return notFound();
  }

  return <ProjectDetails project={currentProject} />;
}
