'use client';

import { useState, useCallback } from 'react';
import { getBlogTags } from '@/actions/blog';

export interface BlogTag {
  name: string;
  count: number;
  slug: string;
  categories: string[];
  trending: boolean;
  popularity: 'high' | 'medium' | 'low';
  color: string;
  relatedPosts: number;
}

interface BlogTagsState {
  tags: BlogTag[];
  loading: boolean;
  error: string | null;
}

export const useBlogTags = () => {
  const [state, setState] = useState<BlogTagsState>({
    tags: [],
    loading: false,
    error: null,
  });

  const fetchTags = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const tagsData = await getBlogTags();
      setState(prev => ({ ...prev, tags: tagsData.tags as BlogTag[], loading: false }));
      return tagsData;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Błąd podczas pobierania tagów';
      setState(prev => ({ ...prev, error: errorMessage, loading: false }));
      return null;
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      tags: [],
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    fetchTags,
    reset,
  };
};
