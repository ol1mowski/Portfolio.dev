'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import s from './SearchResults.page.module.scss';
import PostCardComponent from '../Posts/PostCardComponent/PostCardComponent.component';
import { PostsType } from '@/types/PostType.types';
import { Loading } from '@/components/UI/shared';

interface SearchResponse {
  results: PostsType[];
  total: number;
  query: string;
  message: string;
}

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

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

  if (!query.trim()) {
    return (
      <section className={s.container}>
        <div className={s.emptyState}>
          <h1 className={s.emptyState__title}>Wyszukiwarka artykułów</h1>
          <p className={s.emptyState__subtitle}>
            Użyj paska wyszukiwania powyżej, aby znaleźć interesujące Cię artykuły
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={s.container}>
      <div className={s.header}>
        <h1 className={s.header__title}>
          Wyniki wyszukiwania dla:{' '}
          <span className={s.header__title__query}>&quot;{query}&quot;</span>
        </h1>

        {searchResults && !isLoading && (
          <p className={s.header__subtitle}>{searchResults.message}</p>
        )}
      </div>

      {isLoading && <Loading message="Wyszukiwanie..." />}

      {error && (
        <div className={s.errorState}>
          <h2 className={s.errorState__title}>Ups! Coś poszło nie tak</h2>
          <p className={s.errorState__message}>{error}</p>
          <button className={s.errorState__retry} onClick={() => window.location.reload()}>
            Spróbuj ponownie
          </button>
        </div>
      )}

      {searchResults && !isLoading && !error && (
        <div className={s.results}>
          {searchResults.results.length > 0 ? (
            <div className={s.results__grid}>
              {searchResults.results.map(post => (
                <PostCardComponent
                  key={`search-result-${post.id}-${post.slug}`}
                  id={post.id}
                  title={post.title}
                  slug={post.slug}
                  description={post.description}
                  author={post.author}
                  image={post.image}
                  authorImage={post.authorImage}
                  date={post.date}
                  category={post.category}
                />
              ))}
            </div>
          ) : (
            <div className={s.noResults}>
              <div className={s.noResults__icon}>🔍</div>
              <h2 className={s.noResults__title}>Brak wyników</h2>
              <p className={s.noResults__subtitle}>
                Nie znaleźliśmy artykułów pasujących do zapytania{' '}
                <strong>&quot;{query}&quot;</strong>
              </p>
              <div className={s.noResults__suggestions}>
                <h3 className={s.noResults__suggestions__title}>Spróbuj:</h3>
                <ul className={s.noResults__suggestions__list}>
                  <li>Sprawdzić pisownię</li>
                  <li>Użyć bardziej ogólnych słów kluczowych</li>
                  <li>Spróbować synonimy</li>
                  <li>Skrócić zapytanie</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {!isLoading && (
        <div className={s.popularSearches}>
          <h3 className={s.popularSearches__title}>Popularne wyszukiwania</h3>
          <div className={s.popularSearches__tags}>
            {['React', 'TypeScript', 'Next.js', 'JavaScript', 'CSS', 'Node.js'].map(tag => (
              <a
                key={tag}
                href={`/Blog/search?q=${encodeURIComponent(tag)}`}
                className={s.popularSearches__tags__tag}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default SearchResults;
