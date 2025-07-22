import { getBlogPosts } from '@/actions/blog';
import PostsComponent from './Posts.page';
import { PostsType } from '@/types/PostType.types';

async function Posts() {
  try {
    const posts = await getBlogPosts();

    if (!posts || !posts.length) {
      throw new Error('No data received from the server.');
    }

    return <PostsComponent posts={posts} />;
  } catch (error) {
    console.error('Error fetching Posts data:', error);
    return <p>Error loading Posts section.</p>;
  }
}

export default Posts;
