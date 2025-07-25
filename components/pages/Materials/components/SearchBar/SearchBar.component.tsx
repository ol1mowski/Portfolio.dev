import s from './SearchBar.component.module.scss';
import { memo, useRef, useEffect, useState } from 'react';
import { Loading } from '@/components/UI/shared';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  loading?: boolean;
}

const SearchBar = memo(
  ({ value, onChange, placeholder = 'Szukaj...', loading = false }: SearchBarProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (isFocused && inputRef.current) {
        inputRef.current.focus();
      }
    }, [isFocused, loading]);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    return (
      <div className={s.searchBar}>
        <div className={s.searchWrapper}>
          <div className={s.searchIcon}>
            {loading ? <Loading size="small" variant="dots" /> : '🔍'}
          </div>
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={s.searchInput}
            aria-label="Wyszukaj materiały"
            disabled={loading}
          />
        </div>
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';

export default SearchBar;
