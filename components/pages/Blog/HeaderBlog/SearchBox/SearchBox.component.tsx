'use client';

import { useEffect, useRef } from 'react';
import s from './SearchBox.component.module.scss';
import { SearchBoxForm } from './components/SearchBoxForm/SearchBoxForm.component';
import { SearchSuggestions } from './components/SearchSuggestions/SearchSuggestions.component';
import { useSearchBoxData } from './hooks/useSearchBoxData.hook';

const SearchBox = () => {
  const {
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
  } = useSearchBoxData();

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setActiveSuggestion(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setShowSuggestions, setActiveSuggestion]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigateToSearch(searchTerm);
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
          break;
      }
    } else {
      if (e.key === 'Escape') {
        setShowSuggestions(false);
        setActiveSuggestion(-1);
      }
    }
  };

  const handleFocus = () => {
    if (searchTerm.length >= 2) {
      setShowSuggestions(true);
    }
  };

  const handleNoResultsClick = () => {
    navigateToSearch(searchTerm);
  };

  return (
    <div className={s.searchWrapper} ref={searchRef}>
      <SearchBoxForm
        searchTerm={searchTerm}
        isLoading={isLoading}
        onSearchChange={setSearchTerm}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />

      {showSuggestions && searchTerm.length >= 2 && (
        <SearchSuggestions
          suggestions={suggestions}
          isLoading={isLoading}
          hasSearched={hasSearched}
          searchTerm={searchTerm}
          activeSuggestion={activeSuggestion}
          onSuggestionClick={handleSuggestionClick}
          onSuggestionHover={setActiveSuggestion}
          onNoResultsClick={handleNoResultsClick}
          highlightMatch={highlightMatch}
        />
      )}
    </div>
  );
};

export default SearchBox;
