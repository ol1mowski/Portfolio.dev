'use client';

import s from './HomePage.page.module.scss';

import Header from '../HeaderBlog/Header.component.page';
import Image from 'next/image';
import { type PostsType } from '@/types/PostType.types';

interface HomePageComponentProps {
  posts: PostsType[];
}

function HomePageComponent({ posts }: HomePageComponentProps) {
  if (!posts || !posts.length) {
    return <div role="alert">Nie znaleziono postów.</div>;
  }

  const featuredPost = posts[0];
  const smallPosts = posts.slice(1, 3);

  const trendingTopics = [
    { name: '#React18', growth: '+245%' },
    { name: '#TypeScript', growth: '+189%' },
    { name: '#NextJS14', growth: '+156%' },
    { name: '#Docker', growth: '+134%' },
  ];

  const blogStats = {
    articles: '10+',
    readers: '100+',
    authors: '1',
    categories: '6',
  };

  // Handler do kliknięć na kategorie
  const handleCategoryClick = (category: string) => {
    window.location.href = `/Blog/kategorie/${encodeURIComponent(category)}`;
  };

  // Handler do kliknięć na tagi
  const handleTagClick = (tag: string) => {
    // Usuń # z początku tagu
    const cleanTag = tag.startsWith('#') ? tag.slice(1) : tag;
    window.location.href = `/Blog/tagi/${encodeURIComponent(cleanTag)}`;
  };

  return (
    <section className={s.container}>
      <Header type="Blog" />

      {/* Hero Section */}
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
          {/* Main Content */}
          <div className={s.mainContent}>
            {/* Main Article */}
            <a href={`/Blog/posty/${featuredPost.slug}`} className={s.mainArticle}>
              <div className={s.mainArticle__image}>
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className={s.mainArticle__image__img}
                  width={500}
                  height={300}
                />
              </div>
              <div className={s.mainArticle__content}>
                <div className={s.mainArticle__content__tags}>
                  <span
                    className={s.mainArticle__content__tags__react}
                    onClick={e => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCategoryClick('React');
                    }}
                  >
                    React
                  </span>
                  <span className={s.mainArticle__content__tags__featured}>⭐ Polecane</span>
                </div>
                <h2 className={s.mainArticle__content__title}>{featuredPost.title}</h2>
                <div className={s.mainArticle__content__meta}>
                  <span className={s.mainArticle__content__meta__author}>
                    {featuredPost.author}
                  </span>
                  <span className={s.mainArticle__content__meta__date}>{featuredPost.date}</span>
                  <span className={s.mainArticle__content__meta__readTime}>5 min</span>
                </div>
                <span className={s.mainArticle__content__readMore}>Czytaj więcej →</span>
              </div>
            </a>

            {/* Small Posts */}
            <div className={s.smallPosts}>
              {smallPosts.map((post, index) => (
                <a key={index} href={`/Blog/posty/${post.slug}`} className={s.smallPosts__item}>
                  <div className={s.smallPosts__item__image}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      className={s.smallPosts__item__image__img}
                      width={200}
                      height={150}
                    />
                  </div>
                  <div className={s.smallPosts__item__content}>
                    <div
                      className={s.smallPosts__item__content__tag}
                      onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        const category = index === 0 ? 'TypeScript' : 'Next.js';
                        handleCategoryClick(category);
                      }}
                    >
                      {index === 0 ? 'TypeScript' : 'Next.js'}
                    </div>
                    <h3 className={s.smallPosts__item__content__title}>{post.title}</h3>
                    <div className={s.smallPosts__item__content__meta}>
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                      <span>12 min</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className={s.sidebar}>
            {/* Trending Topics */}
            <div className={s.trendingTopics}>
              <h3 className={s.trendingTopics__title}>📈 Trending Topics</h3>
              <div className={s.trendingTopics__list}>
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className={s.trendingTopics__list__item}
                    onClick={() => handleTagClick(topic.name)}
                  >
                    <span className={s.trendingTopics__list__item__name}>{topic.name}</span>
                    <span className={s.trendingTopics__list__item__growth}>{topic.growth}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Blog Stats */}
            <div className={s.blogStats}>
              <h3 className={s.blogStats__title}>Statystyki bloga</h3>
              <div className={s.blogStats__grid}>
                <div className={s.blogStats__grid__item}>
                  <span className={s.blogStats__grid__item__number}>{blogStats.articles}</span>
                  <span className={s.blogStats__grid__item__label}>Artykułów</span>
                </div>
                <div className={s.blogStats__grid__item}>
                  <span className={s.blogStats__grid__item__number}>{blogStats.readers}</span>
                  <span className={s.blogStats__grid__item__label}>Czytelników</span>
                </div>
                <div className={s.blogStats__grid__item}>
                  <span className={s.blogStats__grid__item__number}>{blogStats.authors}</span>
                  <span className={s.blogStats__grid__item__label}>Autorów</span>
                </div>
                <div className={s.blogStats__grid__item}>
                  <span className={s.blogStats__grid__item__number}>{blogStats.categories}</span>
                  <span className={s.blogStats__grid__item__label}>Kategorii</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </section>
  );
}

export default HomePageComponent;
