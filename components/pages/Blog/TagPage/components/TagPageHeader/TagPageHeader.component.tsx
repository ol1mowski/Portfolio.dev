import { FC } from 'react';
import s from './TagPageHeader.component.module.scss';
import { useLocale } from 'next-intl';

interface TagPageHeaderProps {
  cleanTag: string;
  postsCount: number;
}

export const TagPageHeader: FC<TagPageHeaderProps> = ({ cleanTag, postsCount }) => {
  const locale = useLocale();
  return (
    <div className={s.header}>
      <div className={s.header__breadcrumb}>
        <a href={`/${locale}/Blog`} className={s.header__breadcrumb__link}>
          Blog
        </a>
        <span className={s.header__breadcrumb__separator}>›</span>
        <span className={s.header__breadcrumb__current}>Tag: #{cleanTag}</span>
      </div>
      <h1 className={s.header__title}>
        Posty z tagiem: <span className={s.header__title__highlight}>#{cleanTag}</span>
      </h1>
      <p className={s.header__subtitle}>
        {postsCount > 0
          ? `Znaleziono ${postsCount} ${postsCount === 1 ? 'artykuł' : 'artykułów'} z tym tagiem`
          : 'Brak artykułów z tym tagiem'}
      </p>
    </div>
  );
};
