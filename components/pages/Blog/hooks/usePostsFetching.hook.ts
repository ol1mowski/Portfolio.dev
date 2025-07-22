import { getBlogPosts } from '@/actions/blog';
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
    const posts = await getBlogPosts();

    if (!posts || !posts.length) {
      throw new Error('No data received from the server.');
    }

    return {
      posts,
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
    const posts = await getBlogPosts();

    if (!posts || !posts.length) {
      throw new Error('Failed to fetch posts data');
    }

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
