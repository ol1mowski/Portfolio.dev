import s from '../../HomePage.page.module.scss';

interface BlogStatsProps {
  stats: {
    articles: string;
    readers: string;
    authors: string;
    categories: string;
  };
}

export default function BlogStats({ stats }: BlogStatsProps) {
  return (
    <div className={s.blogStats}>
      <h3 className={s.blogStats__title}>Statystyki bloga</h3>
      <div className={s.blogStats__grid}>
        <div className={s.blogStats__grid__item}>
          <span className={s.blogStats__grid__item__number}>{stats.articles}</span>
          <span className={s.blogStats__grid__item__label}>Artykułów</span>
        </div>
        <div className={s.blogStats__grid__item}>
          <span className={s.blogStats__grid__item__number}>{stats.readers}</span>
          <span className={s.blogStats__grid__item__label}>Czytelników</span>
        </div>
        <div className={s.blogStats__grid__item}>
          <span className={s.blogStats__grid__item__number}>{stats.authors}</span>
          <span className={s.blogStats__grid__item__label}>Autorów</span>
        </div>
        <div className={s.blogStats__grid__item}>
          <span className={s.blogStats__grid__item__number}>{stats.categories}</span>
          <span className={s.blogStats__grid__item__label}>Kategorii</span>
        </div>
      </div>
    </div>
  );
}
