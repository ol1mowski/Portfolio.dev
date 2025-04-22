import HomePageComponent from './HomePage.page';
import { getPosts } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';

async function HomePage() {
  try {
    const fetchedItems = await getPosts();

    if (!Array.isArray(fetchedItems) || !fetchedItems.length) {
      throw new Error('No data received from the server.');
    }

    return <HomePageComponent posts={fetchedItems[0].posts} />;
  } catch (error) {
    console.error('Error fetching Projects data:', error);
    return <p>Error loading Projects section.</p>;
  }
}

export default HomePage;
