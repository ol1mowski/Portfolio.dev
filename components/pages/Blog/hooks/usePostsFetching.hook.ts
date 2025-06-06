import { getPosts } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { type PostsType } from '@/types/PostType.types';

export interface PostsResponse {
  posts: PostsType[];
  isLoading: boolean;
  error: Error | null;
}

export interface SinglePostResponse {
  post: PostsType | null;
  allPosts: PostsType[];
  isLoading: boolean;
  error: Error | null;
}

export const usePostsFetching = async (): Promise<PostsResponse> => {
  try {
    const fetchedItems = await getPosts();

    if (!Array.isArray(fetchedItems) || !fetchedItems.length) {
      throw new Error('No data received from the server.');
    }

    const firstItem = fetchedItems[0] as { posts: PostsType[] };
    return {
      posts: firstItem.posts,
      isLoading: false,
      error: null,
    };
  } catch (error) {
    console.error('Error fetching posts data:', error);
    return {
      posts: [],
      isLoading: false,
      error: error instanceof Error ? error : new Error('Unknown error occurred'),
    };
  }
};

export const useSinglePostFetching = async (slug: string): Promise<SinglePostResponse> => {
  try {
    const allPostsData = await getPosts();

    if (!allPostsData || !Array.isArray(allPostsData) || !allPostsData.length) {
      throw new Error('Failed to fetch posts data');
    }

    const firstItem = allPostsData[0] as { posts: PostsType[] };
    const posts = firstItem.posts;
    const post = posts.find((p: PostsType) => p.slug === slug) || null;

    return {
      post,
      allPosts: posts,
      isLoading: false,
      error: null,
    };
  } catch (error) {
    console.error('Error fetching post data:', error);
    return {
      post: null,
      allPosts: [],
      isLoading: false,
      error: error instanceof Error ? error : new Error('Unknown error occurred'),
    };
  }
};
