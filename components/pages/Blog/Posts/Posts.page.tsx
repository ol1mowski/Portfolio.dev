'use client';

import { useEffect } from 'react';
import s from './Posts.page.module.scss';

import PostCardComponent from './PostCardComponent/PostCardComponent.component';
import PostsButton from './PostsButton/PostsButton.component';
import { type PostsType } from '@/types/PostType.types';
import { useBlogCategories } from '../hooks';
import { Loading, ErrorMessage } from '@/components/UI/shared';
import { useTranslations, useLocale } from 'next-intl';

interface CategoryData {
  name: string;
  count: number;
  icon?: string;
}

function PostsComponent({ posts }: { posts: PostsType[] }) {
  const { categories, loading, error, fetchCategories } = useBlogCategories();
  const t = useTranslations('blog');
  const locale = useLocale();

  const latestPosts = posts.slice(0, 3);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const formattedCategories: CategoryData[] = categories.map(category => ({
    name: category.name,
    count: category.count,
  }));

  if (error) {
    return <ErrorMessage message={error} variant="page" showRetry onRetry={fetchCategories} />;
  }

  return (
    <section className={s.container} id="posts" data-testid="posts-section">
      <div className={s.container__header}>
        <h2 className={s.container__header__title}>{t('latestArticles')}</h2>
        <p className={s.container__header__subtitle}>{t('discoverTrends')}</p>
      </div>

      <div className={s.container__content}>
        <div className={s.container__content__main}>
          <div className={s.container__content__main__grid}>
            {posts.map(post => {
              const { id, title, slug, description, author, image, authorImage, date, category } =
                post;
              return (
                <PostCardComponent
                  key={`post-${id}-${slug}`}
                  id={id}
                  title={title}
                  slug={slug}
                  description={description}
                  author={author}
                  image={image}
                  authorImage={authorImage}
                  date={date}
                  category={category}
                />
              );
            })}
          </div>

          <PostsButton />
        </div>

        <aside className={s.container__content__sidebar}>
          <div className={s.sidebarWidget}>
            <h3 className={s.sidebarWidget__title}>📂 {t('categories')}</h3>
            {loading ? (
              <Loading message={t('loadingCategories')} size="small" />
            ) : (
              <div className={s.categoriesList}>
                {formattedCategories.length > 0 ? (
                  formattedCategories.map((category, index) => (
                    <a
                      key={index}
                      href={`/${locale}/Blog/kategorie/${encodeURIComponent(category.name)}`}
                      className={s.categoriesList__item}
                    >
                      <span className={s.categoriesList__item__name}>{category.name}</span>
                      <span className={s.categoriesList__item__count}>({category.count})</span>
                    </a>
                  ))
                ) : (
                  <p className={s.categoriesList__empty}>{t('noCategories')}</p>
                )}
              </div>
            )}
          </div>

          <div className={s.sidebarWidget}>
            <h3 className={s.sidebarWidget__title}>📰 {t('latestPosts')}</h3>
            <div className={s.latestPosts}>
              {latestPosts.map((post, index) => (
                <a
                  key={index}
                  href={`/${locale}/Blog/posty/${post.slug}`}
                  className={s.latestPosts__item}
                >
                  <h4 className={s.latestPosts__item__title}>{post.title}</h4>
                  <span className={s.latestPosts__item__date}>{post.date}</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default PostsComponent;
