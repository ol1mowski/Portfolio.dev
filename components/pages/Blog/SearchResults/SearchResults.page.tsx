'use client';

import { useSearchParams } from 'next/navigation';
import s from './SearchResults.page.module.scss';
import { Loading, ErrorMessage } from '@/components/UI/shared';
import { SearchResultsHeader } from './components/SearchResultsHeader/SearchResultsHeader.component';
import { SearchResultsContent } from './components/SearchResultsContent/SearchResultsContent.component';
import { PopularSearches } from './components/PopularSearches/PopularSearches.component';
import { useSearchResultsData } from './hooks/useSearchResultsData.hook';
import { useTranslations } from 'next-intl';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const t = useTranslations('searchResults');

  const { searchResults, isLoading, error } = useSearchResultsData(query);

  if (!query.trim()) {
    return (
      <section className={s.container}>
        <div className={s.emptyState}>
          <h1 className={s.emptyState__title}>{t('title')}</h1>
          <p className={s.emptyState__subtitle}>{t('subtitle')}</p>
        </div>
      </section>
    );
  }

  return (
    <section className={s.container}>
      <SearchResultsHeader query={query} message={searchResults?.message} />

      {isLoading && <Loading message={t('searching')} />}

      {error && (
        <ErrorMessage
          message={error}
          variant="page"
          showRetry
          onRetry={() => window.location.reload()}
        />
      )}

      {searchResults && !isLoading && !error && (
        <SearchResultsContent results={searchResults.results} query={query} />
      )}

      {!isLoading && <PopularSearches />}
    </section>
  );
}

export default SearchResults;
