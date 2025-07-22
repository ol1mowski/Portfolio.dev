import { useState, useEffect } from 'react';
import { PostsType } from '@/types/PostType.types';

interface SearchResponse {
  results: PostsType[];
  total: number;
  query: string;
  message: string;
}

export const useSearchResultsData = (query: string) => {
  const [searchResults, setSearchResults] = useState<SearchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }

    const performSearch = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/posts/search?q=${encodeURIComponent(query)}`);

        if (!response.ok) {
          throw new Error('Błąd podczas wyszukiwania');
        }

        const data: SearchResponse = await response.json();
        setSearchResults(data);
      } catch (err) {
        console.error('Search error:', err);
        setError('Wystąpił błąd podczas wyszukiwania. Spróbuj ponownie.');
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [query]);

  return {
    searchResults,
    isLoading,
    error,
  };
};
