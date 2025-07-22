'use client';

import { useState, useCallback } from 'react';
import { getBlogCategories } from '@/actions/blog';

export interface BlogCategory {
  name: string;
  count: number;
  slug: string;
  description: string;
  color: string;
  icon: string;
  percentage: number;
}

interface BlogCategoriesState {
  categories: BlogCategory[];
  loading: boolean;
  error: string | null;
}

export const useBlogCategories = () => {
  const [state, setState] = useState<BlogCategoriesState>({
    categories: [],
    loading: false,
    error: null,
  });

  const fetchCategories = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const categories = await getBlogCategories();
      setState(prev => ({ ...prev, categories, loading: false }));
      return categories;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Błąd podczas pobierania kategorii';
      setState(prev => ({ ...prev, error: errorMessage, loading: false }));
      return null;
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      categories: [],
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    fetchCategories,
    reset,
  };
};
