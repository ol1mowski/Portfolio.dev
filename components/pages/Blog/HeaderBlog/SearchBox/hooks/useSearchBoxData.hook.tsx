import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react';

interface Suggestion {
  id: string;
  title: string;
  slug: string | null;
  category: string;
  type?: string;
}

export const useSearchBoxData = (locale: string) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [hasSearched, setHasSearched] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout>();

  const fetchSuggestions = useCallback(async (query: string) => {
    if (query.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      setHasSearched(false);
      return;
    }

    setIsLoading(true);
    setHasSearched(false);
    try {
      const response = await fetch(`/api/posts/suggestions?q=${encodeURIComponent(query)}&limit=5`);
      const data = await response.json();
      setSuggestions(data.suggestions || []);
      setHasSearched(true);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
      setHasSearched(true);
      setShowSuggestions(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      fetchSuggestions(searchTerm);
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchTerm, fetchSuggestions]);

  const navigateToSearch = useCallback(
    (query: string) => {
      setShowSuggestions(false);
      window.location.href = `/${locale}/Blog/search?q=${encodeURIComponent(query)}`;
    },
    [locale]
  );

  const handleSuggestionClick = useCallback(
    (suggestion: Suggestion) => {
      if (suggestion.type === 'category') {
        navigateToSearch(suggestion.category);
      } else if (suggestion.slug) {
        window.location.href = `/${locale}/Blog/posty/${suggestion.slug}`;
      } else {
        setSearchTerm(suggestion.title);
        navigateToSearch(suggestion.title);
      }
    },
    [navigateToSearch]
  );

  const highlightMatch = useCallback((text: string, searchTerm: string): ReactNode => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    suggestions,
    showSuggestions,
    setShowSuggestions,
    isLoading,
    activeSuggestion,
    setActiveSuggestion,
    hasSearched,
    navigateToSearch,
    handleSuggestionClick,
    highlightMatch,
  };
};
