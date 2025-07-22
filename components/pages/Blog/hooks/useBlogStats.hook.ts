'use client';

import { useState, useCallback } from 'react';
import { getBlogStats } from '@/actions/blog';

export interface BlogStats {
  general: {
    articles: number;
    categories: number;
    tags: number;
    totalViews: number;
    authors: number;
    avgReadTime: number;
  };
  growth: {
    articles: string;
    views: string;
    readers: string;
  };
  categories: Array<{
    name: string;
    count: number;
    percentage: number;
  }>;
  tags: Array<{
    name: string;
    count: number;
    trending: boolean;
  }>;
  recentActivity: {
    lastPostDate: string;
    postsThisMonth: number;
  };
}

interface BlogStatsState {
  stats: BlogStats | null;
  loading: boolean;
  error: string | null;
}

export const useBlogStats = () => {
  const [state, setState] = useState<BlogStatsState>({
    stats: null,
    loading: false,
    error: null,
  });

  const fetchStats = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const stats = await getBlogStats();
      setState(prev => ({ ...prev, stats, loading: false }));
      return stats;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Błąd podczas pobierania statystyk';
      setState(prev => ({ ...prev, error: errorMessage, loading: false }));
      return null;
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      stats: null,
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    fetchStats,
    reset,
  };
};
