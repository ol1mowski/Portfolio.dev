import HomePageComponent from './HomePage.page';
import { getBlogPosts } from '@/actions/blog.actions';
import { type PostsType } from '@/types/PostType.types';

async function HomePage() {
  try {
    const posts = await getBlogPosts();

    if (!posts || !posts.length) {
      throw new Error('No data received from the server.');
    }

    return <HomePageComponent posts={posts} />;
  } catch (error) {
    console.error('Error fetching Blog data:', error);
    return <p>Error loading Blog section.</p>;
  }
}

export default HomePage;
