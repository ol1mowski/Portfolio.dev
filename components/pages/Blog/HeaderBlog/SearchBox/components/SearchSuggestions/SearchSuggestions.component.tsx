import { FC } from 'react';
import s from './SearchSuggestions.component.module.scss';
import { Loading } from '@/components/UI/shared';

interface Suggestion {
  id: string;
  title: string;
  slug: string | null;
  category: string;
  type?: string;
}

interface SearchSuggestionsProps {
  suggestions: Suggestion[];
  isLoading: boolean;
  hasSearched: boolean;
  searchTerm: string;
  activeSuggestion: number;
  onSuggestionClick: (suggestion: Suggestion) => void;
  onSuggestionHover: (index: number) => void;
  onNoResultsClick: () => void;
  highlightMatch: (text: string, searchTerm: string) => React.ReactNode;
}

export const SearchSuggestions: FC<SearchSuggestionsProps> = ({
  suggestions,
  isLoading,
  hasSearched,
  searchTerm,
  activeSuggestion,
  onSuggestionClick,
  onSuggestionHover,
  onNoResultsClick,
  highlightMatch,
}) => {
  return (
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
              onClick={() => onSuggestionClick(suggestion)}
              onMouseEnter={() => onSuggestionHover(index)}
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
            <button className={s.noResultsMessage__button} onClick={onNoResultsClick}>
              Szukaj &quot;{searchTerm}&quot; →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
