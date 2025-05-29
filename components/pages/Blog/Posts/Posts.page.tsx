import s from './Posts.page.module.scss';

import PostCardComponent from './PostCardComponent/PostCardComponent.component';
import PostsButton from './PostsButton/PostsButton.component';
import { type PostsType } from '@/types/PostType.types';

function PostsComponent({ posts }: { posts: PostsType[] }) {
  // Mock data dla sidebar (w rzeczywistej aplikacji byłoby z API)
  const categories = [
    { name: 'React', count: 24 },
    { name: 'TypeScript', count: 18 },
    { name: 'Next.js', count: 15 },
    { name: 'Node.js', count: 12 },
    { name: 'DevOps', count: 10 },
    { name: 'CSS', count: 8 },
  ];

  const popularTags = [
    '#JavaScript',
    '#React',
    '#TypeScript',
    '#Next.js',
    '#Node.js',
    '#HTML',
    '#Docker',
    '#MongoDB',
    '#PostgreSQL',
    '#Git',
  ];

  const latestPosts = posts.slice(0, 3);

  return (
    <section className={s.container} id="posts" data-testid="posts-section">
      {/* Header */}
      <div className={s.container__header}>
        <h2 className={s.container__header__title}>Najnowsze artykuły</h2>
        <p className={s.container__header__subtitle}>
          Odkryj najnowsze trendy i technologie w świecie IT
        </p>
      </div>

      <div className={s.container__content}>
        {/* Main Posts Section */}
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

          {/* Load More Button */}
          <PostsButton />
        </div>

        {/* Sidebar */}
        <aside className={s.container__content__sidebar}>
          {/* Categories */}
          <div className={s.sidebarWidget}>
            <h3 className={s.sidebarWidget__title}>📂 Kategorie</h3>
            <div className={s.categoriesList}>
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={`/Blog/kategorie/${encodeURIComponent(category.name)}`}
                  className={s.categoriesList__item}
                >
                  <span className={s.categoriesList__item__name}>{category.name}</span>
                  <span className={s.categoriesList__item__count}>{category.count}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div className={s.sidebarWidget}>
            <h3 className={s.sidebarWidget__title}>🏷️ Popularne tagi</h3>
            <div className={s.tagsList}>
              {popularTags.map((tag, index) => (
                <a
                  key={index}
                  href={`/Blog/tagi/${encodeURIComponent(tag.replace('#', ''))}`}
                  className={s.tagsList__tag}
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Latest Posts */}
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
