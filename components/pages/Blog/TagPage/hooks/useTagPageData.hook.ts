import { useState, useEffect, useCallback } from 'react';
import { PostsType } from '@/types/PostType.types';

interface ApiResponse {
  posts: PostsType[];
  total: number;
  hasMore: boolean;
  filters: {
    category: string | null;
    tag: string | null;
  };
}

export const useTagPageData = (tag: string) => {
  const [posts, setPosts] = useState<PostsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const cleanTag = tag.startsWith('#') ? tag.slice(1) : tag;

  const fetchPosts = useCallback(
    async (reset = false) => {
      try {
        if (reset) {
          setLoading(true);
          setError(null);
        } else {
          setLoadingMore(true);
        }

        const offset = reset ? 0 : posts.length;
        const response = await fetch(
          `/api/posts?tag=${encodeURIComponent(cleanTag)}&limit=12&offset=${offset}`
        );

        if (!response.ok) {
          throw new Error('Błąd podczas pobierania postów');
        }

        const data: ApiResponse = await response.json();

        if (reset) {
          setPosts(data.posts);
        } else {
          setPosts(prev => [...prev, ...data.posts]);
        }

        setHasMore(data.hasMore);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Nie udało się załadować postów. Spróbuj ponownie.');
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [cleanTag, posts.length]
  );

  const handleLoadMore = useCallback(() => {
    if (!loadingMore && hasMore) {
      fetchPosts(false);
    }
  }, [loadingMore, hasMore, fetchPosts]);

  useEffect(() => {
    fetchPosts(true);
  }, [fetchPosts]);

  return {
    posts,
    loading,
    error,
    loadingMore,
    hasMore,
    cleanTag,
    fetchPosts,
    handleLoadMore,
  };
};
