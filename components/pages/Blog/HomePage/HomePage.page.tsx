'use client';

import { useEffect } from 'react';
import s from './HomePage.page.module.scss';

import Header from '../HeaderBlog/Header.component.page';
import { type PostsType } from '@/types/PostType.types';
import { useBlogStats, useBlogTags } from '../hooks';
import { ErrorMessage } from '@/components/UI/shared';
import { MainArticle, SmallPosts, TrendingTopics, BlogStats } from './components';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import { useLocale } from 'next-intl';

interface HomePageComponentProps {
  posts: PostsType[];
}

function HomePageComponent({ posts }: HomePageComponentProps) {
  const { stats, loading: statsLoading, error: statsError, fetchStats } = useBlogStats();
  const { tags, loading: tagsLoading, error: tagsError, fetchTags } = useBlogTags();
  const t = useOptimizedTranslations('blog');
  const locale = useLocale();

  useEffect(() => {
    fetchStats();
    fetchTags();
  }, [fetchStats, fetchTags]);

  if (!posts || !posts.length) {
    return <div role="alert">{t('noPostsFound')}</div>;
  }

  const featuredPost = posts[0];
  const smallPosts = posts.slice(1, 3);

  const trendingTopics = tags
    .filter(tag => tag.trending)
    .slice(0, 4)
    .map(tag => ({
      name: tag.name,
      growth: `+${tag.count}`,
    }));

  const handleCategoryClick = (category: string) => {
    window.location.href = `/${locale}/Blog/kategorie/${encodeURIComponent(category)}`;
  };

  const handleTagClick = (tag: string) => {
    const cleanTag = tag.startsWith('#') ? tag.slice(1) : tag;
    window.location.href = `/${locale}/Blog/tagi/${encodeURIComponent(cleanTag)}`;
  };

  if (statsError || tagsError) {
    return (
      <ErrorMessage
        message={statsError || tagsError || t('errors.unknownError')}
        variant="page"
        showRetry
        onRetry={() => {
          fetchStats();
          fetchTags();
        }}
      />
    );
  }

  return (
    <section className={s.container}>
      <Header type="Blog" />

      <section className={s.heroSection}>
        <div className={s.heroSection__header}>
          <div className={s.heroSection__header__left}>
            <h1 className={s.heroSection__header__title}>{t('latestArticles')}</h1>
            <p className={s.heroSection__header__subtitle}>{t('discoverContent')}</p>
          </div>
        </div>

        <div className={s.heroSection__content}>
          <div className={s.mainContent}>
            <MainArticle post={featuredPost} onCategoryClick={handleCategoryClick} />

            <SmallPosts posts={smallPosts} onCategoryClick={handleCategoryClick} />
          </div>

          <aside className={s.sidebar}>
            <TrendingTopics
              topics={trendingTopics}
              isLoading={tagsLoading}
              onTagClick={handleTagClick}
            />

            <BlogStats
              stats={{
                articles: stats?.general?.articles?.toString() || '0',
                readers: stats?.general?.totalViews?.toString() || '0',
                authors: stats?.general?.authors?.toString() || '0',
                categories: stats?.general?.categories?.toString() || '0',
              }}
            />
          </aside>
        </div>
      </section>
    </section>
  );
}

export default HomePageComponent;
