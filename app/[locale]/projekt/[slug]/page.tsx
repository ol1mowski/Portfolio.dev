import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { type Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import ProjectDetails from '@/components/pages/ProjectDetails/ProjectDetails.page';
import { getProjects } from '@/actions/projects.actions';
import { ProjectType } from '@/types/PostType.types';
import Header from '@/components/pages/Header/Header.component';
import Footer from '@/components/pages/Footer/Footer.page';

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\|/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: 'project' });
  const projectsData = await getProjects();

  if (!projectsData || !projectsData.length) {
    return {
      title: t('notFound.title'),
      description: t('notFound.description'),
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
      title: t('notFound.title'),
      description: t('notFound.description'),
    };
  }

  return {
    title: `${currentProject.title} | ${t('metadata.caseStudy')}`,
    description: currentProject.description,
    openGraph: {
      images: [currentProject.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

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

  return (
    <>
      <Header />
      <ProjectDetails project={currentProject} />
      <Footer />
    </>
  );
}
