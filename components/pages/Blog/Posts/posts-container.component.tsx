import { type FC } from 'react';
import { type PostsResponse } from '../hooks/usePosts.hook';
import { PostsSection } from './posts.component';
import { Loading } from '../loading';

interface PostsContainerProps {
  postsData: PostsResponse;
}

export const PostsContainer: FC<PostsContainerProps> = ({ postsData }) => {
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

  return <PostsSection posts={posts} />;
}; 