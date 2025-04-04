import { type FC } from 'react';
import { type SinglePostResponse } from '../hooks/usePostsFetching.hook';
import { PostSite } from './post-site.component';
import { Loading } from '../loading';
import NotFound from '../NotFound/NotFound.page';
import { PostProvider } from '../post-provider';

interface PostSiteContainerProps {
  postData: SinglePostResponse;
}

export const PostSiteContainer: FC<PostSiteContainerProps> = ({ postData }) => {
  const { post, allPosts, isLoading, error } = postData;

  if (isLoading) {
    return <Loading />;
  }

  if (error || !post) {
    return <NotFound link="/Blog" info="Nie znaleziono takiego postu" />;
  }

  return (
    <PostProvider>
      <PostSite post={post} allPosts={allPosts} />
    </PostProvider>
  );
}; 