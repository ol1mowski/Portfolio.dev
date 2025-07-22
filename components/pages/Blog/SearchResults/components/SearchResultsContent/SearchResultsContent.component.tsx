import { FC } from 'react';
import s from './SearchResultsContent.component.module.scss';
import PostCardComponent from '../../../Posts/PostCardComponent/PostCardComponent.component';
import { PostsType } from '@/types/PostType.types';

interface SearchResultsContentProps {
  results: PostsType[];
  query: string;
}

export const SearchResultsContent: FC<SearchResultsContentProps> = ({ results, query }) => {
  if (results.length === 0) {
    return (
      <div className={s.noResults}>
        <div className={s.noResults__icon}>🔍</div>
        <h2 className={s.noResults__title}>Brak wyników</h2>
        <p className={s.noResults__subtitle}>
          Nie znaleźliśmy artykułów pasujących do zapytania <strong>&quot;{query}&quot;</strong>
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
    );
  }

  return (
    <div className={s.results__grid}>
      {results.map(post => (
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
  );
};
