'use client';

import { useEffect, useState } from 'react';
import Projects from './Projects.page';
import { PROJECTS_FETCH_ERROR_LOG } from './constants/projects.constants';
import { ErrorMessage } from '@/components/UI/shared';
import { ProjectsData } from './Projects.page';

export default function ProjectsPage() {
  const [projectsData, setProjectsData] = useState<ProjectsData[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjectsData(data);
      } catch (err) {
        console.error(PROJECTS_FETCH_ERROR_LOG, err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Ładowanie projektów...</div>;
  }

  if (error) {
    return <ErrorMessage message="Nie udało się pobrać projektów. Przepraszamy za utrudnienia." />;
  }

  if (!projectsData || !Array.isArray(projectsData) || !projectsData.length) {
    console.error(PROJECTS_FETCH_ERROR_LOG);
    return <ErrorMessage message="Nie udało się pobrać projektów. Przepraszamy za utrudnienia." />;
  }

  return <Projects projects={projectsData} />;
}
