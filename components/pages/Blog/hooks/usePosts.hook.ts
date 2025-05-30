import { getPosts } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { type PostsType } from '@/types/PostType.types';

export interface PostsResponse {
  posts: PostsType[];
  isLoading: boolean;
  error: Error | null;
}

export const usePosts = async (): Promise<PostsResponse> => {
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
