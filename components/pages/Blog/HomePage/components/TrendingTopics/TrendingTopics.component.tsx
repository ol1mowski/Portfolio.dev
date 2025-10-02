import s from '../../HomePage.page.module.scss';
import { Loading } from '@/components/UI/shared';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

interface TrendingTopicsProps {
  topics: Array<{ name: string; growth: string }>;
  isLoading: boolean;
  onTagClick: (tag: string) => void;
}

export default function TrendingTopics({ topics, isLoading, onTagClick }: TrendingTopicsProps) {
  const t = useOptimizedTranslations('blog');

  return (
    <div className={s.trendingTopics}>
      <h3 className={s.trendingTopics__title}>📈 {t('trendingTopics')}</h3>
      {isLoading ? (
        <Loading message={t('loadingCategories')} size="small" />
      ) : (
        <div className={s.trendingTopics__list}>
          {topics.length > 0 ? (
            topics.map((topic, index) => (
              <div
                key={index}
                className={s.trendingTopics__list__item}
                onClick={() => onTagClick(topic.name)}
              >
                <span className={s.trendingTopics__list__item__name}>{topic.name}</span>
                <span className={s.trendingTopics__list__item__growth}>{topic.growth}</span>
              </div>
            ))
          ) : (
            <div className={s.noData}>{t('trendingTopics')}</div>
          )}
        </div>
      )}
    </div>
  );
}
