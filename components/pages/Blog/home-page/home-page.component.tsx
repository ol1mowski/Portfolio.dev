import { type FC } from 'react';
import Link from 'next/link';
import { type PostsType } from '@/types/PostType.types';

import Caption from '@/components/UI/Caption/Caption.component';
import Description from '@/components/UI/Description/Description.component';
import Button from '@/components/UI/Button/Button.component';
import AnimationWrapper from '@/components/UI/AnimationWrapper/AnimationWrapper.component';

import Header from '../header/header.component';
import s from './home-page.module.scss';

interface HomePageProps {
  posts: PostsType[];
}

export const HomePage: FC<HomePageProps> = ({ posts }) => {
  if (!posts || !posts.length) {
    return (
      <div role="alert" className={s.errorMessage}>
        Nie znaleziono postów.
      </div>
    );
  }

  const lastPost = posts[posts.length - 1];

  return (
    <section className={s.container}>
      <Header />
      <AnimationWrapper>
        <section className={s.content}>
          <section className={s.contentSection}>
            <span className={s.category}>
              {lastPost.category}
            </span>
            <Caption type="main" value={lastPost.title} />
            <Description value={lastPost.description} />
            <Link href={`/Blog/posty/${lastPost.slug}`}>
              <Button type="small" value="Czytaj" />
            </Link>
          </section>
        </section>
      </AnimationWrapper>
    </section>
  );
}; 