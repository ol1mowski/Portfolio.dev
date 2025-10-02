import s from '../../HomePage.page.module.scss';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

interface BlogStatsProps {
  stats: {
    articles: string;
    readers: string;
    authors: string;
    categories: string;
  };
}

export default function BlogStats({ stats }: BlogStatsProps) {
  const t = useOptimizedTranslations('blog.stats');

  return (
    <div className={s.blogStats}>
      <h3 className={s.blogStats__title}>{t('title')}</h3>
      <div className={s.blogStats__grid}>
        <div className={s.blogStats__grid__item}>
          <span className={s.blogStats__grid__item__number}>{stats.articles}</span>
          <span className={s.blogStats__grid__item__label}>{t('articles')}</span>
        </div>
        <div className={s.blogStats__grid__item}>
          <span className={s.blogStats__grid__item__number}>{stats.readers}</span>
          <span className={s.blogStats__grid__item__label}>{t('readers')}</span>
        </div>
        <div className={s.blogStats__grid__item}>
          <span className={s.blogStats__grid__item__number}>{stats.authors}</span>
          <span className={s.blogStats__grid__item__label}>{t('authors')}</span>
        </div>
        <div className={s.blogStats__grid__item}>
          <span className={s.blogStats__grid__item__number}>{stats.categories}</span>
          <span className={s.blogStats__grid__item__label}>{t('categories')}</span>
        </div>
      </div>
    </div>
  );
}
