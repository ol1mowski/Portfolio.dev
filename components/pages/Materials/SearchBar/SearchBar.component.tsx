import s from './SearchBar.component.module.scss';

import { memo, useRef, useEffect } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = memo(({ value, onChange, placeholder = 'Szukaj...' }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClear = () => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div className={s.searchBar}>
      <div className={s.searchWrapper}>
        <div className={s.searchIcon}>🔍</div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className={s.searchInput}
          aria-label="Wyszukaj materiały"
        />
        {value && (
          <button onClick={handleClear} className={s.clearButton} aria-label="Wyczyść wyszukiwanie">
            <span>✕</span>
          </button>
        )}
        <div className={s.shortcut}>
          <kbd>Ctrl</kbd> + <kbd>K</kbd>
        </div>
      </div>
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;
