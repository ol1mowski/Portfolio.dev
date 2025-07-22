'use client';

import { useEffect } from 'react';
import s from './HomePage.page.module.scss';

import Header from '../HeaderBlog/Header.component.page';
import { type PostsType } from '@/types/PostType.types';
import { useBlogStats, useBlogTags } from '../hooks';
import { MainArticle, SmallPosts, TrendingTopics, BlogStats } from './components';

interface HomePageComponentProps {
  posts: PostsType[];
}

function HomePageComponent({ posts }: HomePageComponentProps) {
  const { stats, loading: statsLoading, error: statsError, fetchStats } = useBlogStats();
  const { tags, loading: tagsLoading, error: tagsError, fetchTags } = useBlogTags();

  useEffect(() => {
    fetchStats();
    fetchTags();
  }, [fetchStats, fetchTags]);

  if (!posts || !posts.length) {
    return <div role="alert">Nie znaleziono postów.</div>;
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
    window.location.href = `/Blog/kategorie/${encodeURIComponent(category)}`;
  };

  const handleTagClick = (tag: string) => {
    const cleanTag = tag.startsWith('#') ? tag.slice(1) : tag;
    window.location.href = `/Blog/tagi/${encodeURIComponent(cleanTag)}`;
  };

  if (statsError || tagsError) {
    return <div role="alert">Błąd: {statsError || tagsError}</div>;
  }

  return (
    <section className={s.container}>
      <Header type="Blog" />

      <section className={s.heroSection}>
        <div className={s.heroSection__header}>
          <div className={s.heroSection__header__left}>
            <h1 className={s.heroSection__header__title}>Najnowsze artykuły</h1>
            <p className={s.heroSection__header__subtitle}>
              Odkryj najświeższe treści z świata technologii
            </p>
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
