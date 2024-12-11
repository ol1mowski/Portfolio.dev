import { getPosts } from "@/db/Utils/DataFetchingFunctions/DataFetchingFunctions";
import PostSiteComponent from "./PostSite.logic";
import { type PostsType } from "@/types/PostType.type";

async function PostSite({ postId }: { postId: string }) {
  try {
    const fetchedItems = await getPosts();

    if (!Array.isArray(fetchedItems) || !fetchedItems.length) {
      throw new Error("No data received from the server.");
    }

    const posts = fetchedItems[0].posts;
    const post = posts.find((post: PostsType) => post.slug === postId);
    
    if (!post) {
      throw new Error("Post not found");
    }

    return <PostSiteComponent post={post} allPosts={posts} />;
  } catch (error) {
    console.error("Error fetching post data:", error);
    return <p>Error loading post.</p>;
  }
}

export default PostSite;
