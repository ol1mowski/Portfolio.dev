import { notFound } from 'next/navigation';
import ProjectDetails from '@/components/pages/ProjectDetails/ProjectDetails.page';
import { getProjects } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { ProjectType } from '@/types/PostType.types';

// Funkcja generująca slug - identyczna jak w komponencie ProjectCta
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\|/g, '') // usuwanie znaku |
    .replace(/[^a-z0-9]+/g, '-') // zamiana znaków specjalnych na -
    .replace(/^-+|-+$/g, ''); // usuwanie myślników z początku i końca
};

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

  const currentProject = allProjects.find(project => generateSlug(project.title) === params.slug);

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

  const currentProject = allProjects.find(project => generateSlug(project.title) === params.slug);

  if (!currentProject) {
    return notFound();
  }

  return <ProjectDetails project={currentProject} />;
}
