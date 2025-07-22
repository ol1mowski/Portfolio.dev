'use client';

import { useState, useCallback } from 'react';
import { ProjectType } from '@/types/PostType.types';
import { getProjects } from '@/actions/projects.actions';

interface ProjectsDataState {
  projects: ProjectType[] | null;
  loading: boolean;
  error: string | null;
}

export const useProjectsData = () => {
  const [state, setState] = useState<ProjectsDataState>({
    projects: null,
    loading: false,
    error: null,
  });

  const fetchProjects = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const projectsData = await getProjects();
      const projects = projectsData?.[0]?.projects || null;
      setState(prev => ({ ...prev, projects, loading: false }));
      return projects;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Błąd podczas pobierania projektów';
      setState(prev => ({ ...prev, error: errorMessage, loading: false }));
      return null;
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      projects: null,
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    fetchProjects,
    reset,
  };
};
