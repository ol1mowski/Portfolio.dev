'use client';

import { useState, useCallback } from 'react';
import { PostsType } from '@/types/PostType.types';
import {
  getBlogPosts,
  getFilteredPosts,
  getPostBySlug,
  searchPosts,
  getSearchSuggestions,
} from '@/actions/blog';

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

export interface FilterParams {
  category?: string;
  tag?: string;
  limit?: number;
  offset?: number;
}

interface BlogPostsState {
  posts: PostsType[] | null;
  loading: boolean;
  error: string | null;
}

export const useBlogPosts = () => {
  const [state, setState] = useState<BlogPostsState>({
    posts: null,
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

  const reset = useCallback(() => {
    setState({
      posts: null,
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    fetchPosts,
    fetchFilteredPosts,
    fetchPostBySlug,
    searchPostsData,
    fetchSearchSuggestions,
    reset,
  };
};
