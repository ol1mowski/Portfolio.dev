'use client';

import { useState, useEffect, useCallback } from 'react';
import s from './CategoryPage.page.module.scss';
import Header from '../HeaderBlog/Header.component.page';
import PostCardComponent from '../Posts/PostCardComponent/PostCardComponent.component';
import { PostsType } from '@/types/PostType.types';

interface CategoryPageProps {
  category: string;
}

interface ApiResponse {
  posts: PostsType[];
  total: number;
  hasMore: boolean;
  filters: {
    category: string | null;
    tag: string | null;
  };
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  const [posts, setPosts] = useState<PostsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const fetchPosts = useCallback(
    async (reset = false) => {
      try {
        if (reset) {
          setLoading(true);
          setError(null);
        } else {
          setLoadingMore(true);
        }

        const offset = reset ? 0 : posts.length;
        const response = await fetch(
          `/api/posts?category=${encodeURIComponent(category)}&limit=12&offset=${offset}`
        );

        if (!response.ok) {
          throw new Error('Błąd podczas pobierania postów');
        }

        const data: ApiResponse = await response.json();

        if (reset) {
          setPosts(data.posts);
        } else {
          setPosts(prev => [...prev, ...data.posts]);
        }

        setHasMore(data.hasMore);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Nie udało się załadować postów. Spróbuj ponownie.');
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [category, posts.length]
  );

  useEffect(() => {
    fetchPosts(true);
  }, [fetchPosts]);

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      fetchPosts(false);
    }
  };

  if (loading) {
    return (
      <>
        <Header type="Blog" />
        <div className={s.container}>
          <div className={s.loading}>
            <div className={s.loading__spinner}></div>
            <p className={s.loading__text}>Ładowanie postów z kategorii {category}...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header type="Blog" />
        <div className={s.container}>
          <div className={s.error}>
            <div className={s.error__icon}>⚠️</div>
            <h2 className={s.error__title}>Wystąpił błąd</h2>
            <p className={s.error__message}>{error}</p>
            <button onClick={() => fetchPosts(true)} className={s.error__button}>
              Spróbuj ponownie
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header type="Blog" />
      <div className={s.container}>
        {/* Header sekcji */}
        <div className={s.header}>
          <div className={s.header__breadcrumb}>
            <a href="/Blog" className={s.header__breadcrumb__link}>
              Blog
            </a>
            <span className={s.header__breadcrumb__separator}>›</span>
            <span className={s.header__breadcrumb__current}>Kategoria: {category}</span>
          </div>
          <h1 className={s.header__title}>
            Posty z kategorii: <span className={s.header__title__highlight}>{category}</span>
          </h1>
          <p className={s.header__subtitle}>
            {posts.length > 0
              ? `Znaleziono ${posts.length} ${posts.length === 1 ? 'artykuł' : 'artykułów'} w tej kategorii`
              : 'Brak artykułów w tej kategorii'}
          </p>
        </div>

        {/* Grid postów */}
        {posts.length > 0 ? (
          <>
            <div className={s.postsGrid}>
              {posts.map(post => (
                <PostCardComponent
                  key={`category-post-${post.id}-${post.slug}`}
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

            {/* Load More Button */}
            {hasMore && (
              <div className={s.loadMore}>
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className={s.loadMore__button}
                >
                  {loadingMore ? (
                    <>
                      <div className={s.loadMore__button__spinner}></div>
                      Ładowanie...
                    </>
                  ) : (
                    'Załaduj więcej artykułów'
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={s.noResults}>
            <div className={s.noResults__icon}>📂</div>
            <h2 className={s.noResults__title}>Brak artykułów</h2>
            <p className={s.noResults__subtitle}>
              W kategorii <strong>{category}</strong> nie ma jeszcze żadnych artykułów.
            </p>
            <a href="/Blog" className={s.noResults__button}>
              Wróć do bloga
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryPage;
