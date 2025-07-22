'use client';

import { useState, useEffect, useRef } from 'react';
import s from './SearchBox.component.module.scss';
import { Loading } from '@/components/UI/shared';

interface Suggestion {
  id: string;
  title: string;
  slug: string | null;
  category: string;
  type?: string;
}

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [hasSearched, setHasSearched] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const fetchSuggestions = async (query: string) => {
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
  };

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
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setActiveSuggestion(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigateToSearch(searchTerm);
    }
  };

  const navigateToSearch = (query: string) => {
    setShowSuggestions(false);
    window.location.href = `/Blog/search?q=${encodeURIComponent(query)}`;
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    if (suggestion.type === 'category') {
      navigateToSearch(suggestion.category);
    } else if (suggestion.slug) {
      window.location.href = `/Blog/posty/${suggestion.slug}`;
    } else {
      setSearchTerm(suggestion.title);
      navigateToSearch(suggestion.title);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    if (suggestions.length > 0) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveSuggestion(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveSuggestion(prev => (prev > 0 ? prev - 1 : -1));
          break;
        case 'Enter':
          if (activeSuggestion >= 0) {
            e.preventDefault();
            handleSuggestionClick(suggestions[activeSuggestion]);
          }
          break;
        case 'Escape':
          setShowSuggestions(false);
          setActiveSuggestion(-1);
          inputRef.current?.blur();
          break;
      }
    } else {
      if (e.key === 'Escape') {
        setShowSuggestions(false);
        setActiveSuggestion(-1);
        inputRef.current?.blur();
      }
    }
  };

  const highlightMatch = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className={s.highlight}>
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const handleNoResultsClick = () => {
    navigateToSearch(searchTerm);
  };

  return (
    <div className={s.searchWrapper} ref={searchRef}>
      <form className={s.searchBox} onSubmit={handleSubmit}>
        <button type="submit" className={s.searchBox__button}>
          {isLoading ? (
            <div className={s.searchBox__button__spinner}></div>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <input
          ref={inputRef}
          type="text"
          placeholder="Szukaj artykułów..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchTerm.length >= 2 && setShowSuggestions(true)}
          className={s.searchBox__input}
          autoComplete="off"
        />
      </form>

      {showSuggestions && searchTerm.length >= 2 && (
        <div className={s.suggestionsDropdown}>
          <div className={s.suggestionsDropdown__list}>
            {isLoading && <Loading message="Wyszukiwanie..." size="small" variant="dots" />}

            {!isLoading &&
              suggestions.length > 0 &&
              suggestions.map((suggestion, index) => (
                <button
                  key={suggestion.id}
                  className={`${s.suggestionItem} ${
                    index === activeSuggestion ? s.suggestionItem__active : ''
                  }`}
                  onClick={() => handleSuggestionClick(suggestion)}
                  onMouseEnter={() => setActiveSuggestion(index)}
                >
                  <div className={s.suggestionItem__content}>
                    <div className={s.suggestionItem__content__title}>
                      {highlightMatch(suggestion.title, searchTerm)}
                    </div>
                    <div className={s.suggestionItem__content__category}>{suggestion.category}</div>
                  </div>
                  <div className={s.suggestionItem__icon}>
                    {suggestion.type === 'category' ? '📂' : '📄'}
                  </div>
                </button>
              ))}

            {!isLoading && hasSearched && suggestions.length === 0 && (
              <div className={s.noResultsMessage}>
                <div className={s.noResultsMessage__icon}>🔍</div>
                <div className={s.noResultsMessage__content}>
                  <div className={s.noResultsMessage__content__title}>
                    Brak wyników dla &quot;{searchTerm}&quot;
                  </div>
                  <div className={s.noResultsMessage__content__subtitle}>
                    Kliknij aby wyszukać w całej bazie
                  </div>
                </div>
                <button className={s.noResultsMessage__button} onClick={handleNoResultsClick}>
                  Szukaj &quot;{searchTerm}&quot; →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
