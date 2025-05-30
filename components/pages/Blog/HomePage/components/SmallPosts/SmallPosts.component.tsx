import s from '../../HomePage.page.module.scss';
import Image from 'next/image';
import { type PostsType } from '@/types/PostType.types';

interface SmallPostsProps {
  posts: PostsType[];
  onCategoryClick: (category: string) => void;
}

export default function SmallPosts({ posts, onCategoryClick }: SmallPostsProps) {
  return (
    <div className={s.smallPosts}>
      {posts.map((post, index) => (
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
                onCategoryClick(post.category || (index === 0 ? 'TypeScript' : 'Next.js'));
              }}
            >
              {post.category || (index === 0 ? 'TypeScript' : 'Next.js')}
            </div>
            <h3 className={s.smallPosts__item__content__title}>{post.title}</h3>
            <div className={s.smallPosts__item__content__meta}>
              <span>{post.author}</span>
              <span>{post.date}</span>
              <span>{post.readTime || 12} min</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
