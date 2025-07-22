import { getBlogPosts } from '@/actions/blog';
import { type PostsType } from '@/types/PostType.types';

export interface PostsResponse {
  posts: PostsType[];
  isLoading: boolean;
  error: Error | null;
}

export const usePosts = async (): Promise<PostsResponse> => {
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
