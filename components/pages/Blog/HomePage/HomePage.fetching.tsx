import HomePageComponent from './HomePage.page';
import { getPosts } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { type PostsType } from '@/types/PostType.types';

async function HomePage() {
  try {
    const fetchedItems = await getPosts();

    if (!Array.isArray(fetchedItems) || !fetchedItems.length) {
      throw new Error('No data received from the server.');
    }

    const firstItem = fetchedItems[0] as { posts: PostsType[] };
    return <HomePageComponent posts={firstItem.posts} />;
  } catch (error) {
    console.error('Error fetching Projects data:', error);
    return <p>Error loading Projects section.</p>;
  }
}

export default HomePage;
