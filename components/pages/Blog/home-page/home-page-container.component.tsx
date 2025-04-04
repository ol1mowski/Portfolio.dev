import { type FC } from 'react';
import { type PostsResponse } from '../hooks/usePosts.hook';
import { HomePage } from './home-page.component';
import { Loading } from '../loading';

interface HomePageContainerProps {
  postsData: PostsResponse;
}

export const HomePageContainer: FC<HomePageContainerProps> = ({ postsData }) => {
  const { posts, isLoading, error } = postsData;

  if (isLoading) {
    return <Loading />;
  }

  if (error || !posts.length) {
    return (
      <div role="alert">
        Wystąpił błąd podczas ładowania postów. Proszę spróbować ponownie później.
      </div>
    );
  }

  return <HomePage posts={posts} />;
}; 