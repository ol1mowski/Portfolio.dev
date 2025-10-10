import { FC, useRef } from 'react';
import s from './SearchBoxForm.component.module.scss';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

interface SearchBoxFormProps {
  searchTerm: string;
  isLoading: boolean;
  onSearchChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onFocus: () => void;
}

export const SearchBoxForm: FC<SearchBoxFormProps> = ({
  searchTerm,
  isLoading,
  onSearchChange,
  onSubmit,
  onKeyDown,
  onFocus,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const t = useOptimizedTranslations('blog');

  return (
    <form className={s.searchBox} onSubmit={onSubmit}>
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
        placeholder={t('searchPlaceholder')}
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        className={s.searchBox__input}
        autoComplete="off"
      />
    </form>
  );
};
