'use client';

import { useEffect } from 'react';
import s from './Posts.page.module.scss';

import PostCardComponent from './PostCardComponent/PostCardComponent.component';
import PostsButton from './PostsButton/PostsButton.component';
import { type PostsType } from '@/types/PostType.types';
import { useBlogData } from '../hooks/useBlogData.hook';

interface CategoryData {
  name: string;
  count: number;
  icon?: string;
}

function PostsComponent({ posts }: { posts: PostsType[] }) {
  const { categories, loading, error, fetchCategories } = useBlogData();

  const latestPosts = posts.slice(0, 3);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const formattedCategories: CategoryData[] = categories.map(category => ({
    name: category.name,
    count: category.count,
  }));

  if (error) {
    return <div role="alert">Błąd: {error}</div>;
  }

  return (
    <section className={s.container} id="posts" data-testid="posts-section">
      <div className={s.container__header}>
        <h2 className={s.container__header__title}>Najnowsze artykuły</h2>
        <p className={s.container__header__subtitle}>
          Odkryj najnowsze trendy i technologie w świecie IT
        </p>
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
            <h3 className={s.sidebarWidget__title}>📂 Kategorie</h3>
            {loading ? (
              <div className={s.loadingSpinner}>
                <div className={s.loadingSpinner__icon}></div>
                <span>Ładowanie kategorii...</span>
              </div>
            ) : (
              <div className={s.categoriesList}>
                {formattedCategories.length > 0 ? (
                  formattedCategories.map((category, index) => (
                    <a
                      key={index}
                      href={`/Blog/kategorie/${encodeURIComponent(category.name)}`}
                      className={s.categoriesList__item}
                    >
                      <span className={s.categoriesList__item__name}>{category.name}</span>
                      <span className={s.categoriesList__item__count}>({category.count})</span>
                    </a>
                  ))
                ) : (
                  <p className={s.categoriesList__empty}>Brak kategorii</p>
                )}
              </div>
            )}
          </div>

          <div className={s.sidebarWidget}>
            <h3 className={s.sidebarWidget__title}>📰 Najnowsze posty</h3>
            <div className={s.latestPosts}>
              {latestPosts.map((post, index) => (
                <a key={index} href={`/Blog/posty/${post.slug}`} className={s.latestPosts__item}>
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
