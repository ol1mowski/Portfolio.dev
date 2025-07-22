'use client';

import { useState, useEffect, useCallback } from 'react';
import { PostsType } from '@/types/PostType.types';
import {
  getBlogPosts,
  getFilteredPosts,
  getPostBySlug,
  getBlogStats,
  getBlogCategories,
  getBlogTags,
  searchPosts,
  getSearchSuggestions,
} from '@/actions/blog';

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

export interface BlogCategory {
  name: string;
  count: number;
  slug: string;
  description: string;
  color: string;
  icon: string;
  percentage: number;
}

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

export interface SearchResult {
  results: PostsType[];
  total: number;
  query: string;
  message: string;
}

export interface SearchSuggestion {
  id: string;
  title: string;
  slug: string | null;
  category: string;
  type: 'post' | 'category';
}

interface BlogDataState {
  posts: PostsType[] | null;
  stats: BlogStats | null;
  categories: BlogCategory[];
  tags: BlogTag[];
  loading: boolean;
  error: string | null;
}

export interface FilterParams {
  category?: string;
  tag?: string;
  limit?: number;
  offset?: number;
}

export const useBlogData = () => {
  const [state, setState] = useState<BlogDataState>({
    posts: null,
    stats: null,
    categories: [],
    tags: [],
    loading: false,
    error: null,
  });

  const fetchPosts = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const posts = await getBlogPosts();
      setState(prev => ({ ...prev, posts, loading: false }));
      return posts;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Błąd podczas pobierania postów';
      setState(prev => ({ ...prev, error: errorMessage, loading: false }));
      return null;
    }
  }, []);

  const fetchFilteredPosts = useCallback(async (params: FilterParams) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const result = await getFilteredPosts(params);
      setState(prev => ({ ...prev, loading: false }));
      return result;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Błąd podczas pobierania filtrowanych postów';
      setState(prev => ({ ...prev, error: errorMessage, loading: false }));
      return null;
    }
  }, []);

  const fetchPostBySlug = useCallback(async (slug: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const post = await getPostBySlug(slug);
      setState(prev => ({ ...prev, loading: false }));
      return post;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Błąd podczas pobierania postu';
      setState(prev => ({ ...prev, error: errorMessage, loading: false }));
      return null;
    }
  }, []);

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

  const searchPostsData = useCallback(async (query: string): Promise<SearchResult | null> => {
    try {
      const result = await searchPosts(query);
      return result;
    } catch (error) {
      console.error('Błąd podczas wyszukiwania:', error);
      return null;
    }
  }, []);

  const fetchSearchSuggestions = useCallback(async (query: string, limit: number = 5) => {
    try {
      const result = await getSearchSuggestions(query, limit);
      return result;
    } catch (error) {
      console.error('Błąd podczas pobierania sugestii:', error);
      return { suggestions: [] };
    }
  }, []);

  const initialize = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const [posts, stats, categories, tagsData] = await Promise.all([
        getBlogPosts(),
        getBlogStats(),
        getBlogCategories(),
        getBlogTags(),
      ]);

      setState(prev => ({
        ...prev,
        posts,
        stats,
        categories,
        tags: tagsData.tags as BlogTag[],
        loading: false,
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Błąd podczas inicjalizacji';
      setState(prev => ({ ...prev, error: errorMessage, loading: false }));
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      posts: null,
      stats: null,
      categories: [],
      tags: [],
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    fetchPosts,
    fetchFilteredPosts,
    fetchPostBySlug,
    fetchStats,
    fetchCategories,
    fetchTags,
    searchPostsData,
    fetchSearchSuggestions,
    initialize,
    reset,
  };
};
