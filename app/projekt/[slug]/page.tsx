import { notFound } from 'next/navigation';
import ProjectDetails from '@/components/pages/ProjectDetails/ProjectDetails.page';
import { getProjects } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { ProjectType } from '@/types/PostType.types';

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\|/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// @ts-expect-error - Next.js wymaga specyficznych typów
export async function generateMetadata({ params }) {
  const { slug } = params;
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

  const currentProject = allProjects.find(project => generateSlug(project.title) === slug);

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

// @ts-expect-error - Next.js wymaga specyficznych typów
export default async function ProjectPage({ params }) {
  const { slug } = params;
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

  const currentProject = allProjects.find(project => generateSlug(project.title) === slug);

  if (!currentProject) {
    return notFound();
  }

  return <ProjectDetails project={currentProject} />;
}
