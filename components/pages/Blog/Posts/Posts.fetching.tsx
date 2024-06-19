import { getPosts } from "@/db/db_connect";
import PostsComponent from "./Posts.page";

async function Posts() {
  try {
    const fetchedItems = await getPosts();

    if (!Array.isArray(fetchedItems) || !fetchedItems.length) {
      throw new Error("No data received from the server.");
    }

    return <PostsComponent posts={fetchedItems[0].posts} />;
  } catch (error) {
    console.error("Error fetching Projects data:", error);
    return <p>Error loading Projects section.</p>;
  }
}

export default Posts;
