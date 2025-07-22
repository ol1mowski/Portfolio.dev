import { FC } from 'react';
import s from './SearchResultsHeader.component.module.scss';

interface SearchResultsHeaderProps {
  query: string;
  resultsCount?: number;
  message?: string;
}

export const SearchResultsHeader: FC<SearchResultsHeaderProps> = ({
  query,
  resultsCount,
  message,
}) => {
  return (
    <div className={s.header}>
      <h1 className={s.header__title}>
        Wyniki wyszukiwania dla: <span className={s.header__title__query}>&quot;{query}&quot;</span>
      </h1>

      {message && <p className={s.header__subtitle}>{message}</p>}
    </div>
  );
};
