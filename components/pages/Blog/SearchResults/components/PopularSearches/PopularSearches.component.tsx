import { FC } from 'react';
import s from './PopularSearches.component.module.scss';
import { useLocale } from 'next-intl';

const POPULAR_TAGS = ['React', 'TypeScript', 'Next.js', 'JavaScript', 'CSS', 'Node.js'];

export const PopularSearches: FC = () => {
  const locale = useLocale();
  return (
    <div className={s.popularSearches}>
      <h3 className={s.popularSearches__title}>Popularne wyszukiwania</h3>
      <div className={s.popularSearches__tags}>
        {POPULAR_TAGS.map(tag => (
          <a
            key={tag}
            href={`/${locale}/Blog/search?q=${encodeURIComponent(tag)}`}
            className={s.popularSearches__tags__tag}
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};
