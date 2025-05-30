import { getPosts } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import PostSiteComponent from './PostSite.logic';
import { type PostsType } from '@/types/PostType.types';
import NotFound from '../NotFound/NotFound.page';
import Header from '../HeaderBlog/Header.component.page';
import Footer from '../../Footer/Footer.page';

async function PostSite({ postId }: { postId: string }) {
  try {
    const fetchedItems = await getPosts();

    if (!Array.isArray(fetchedItems) || !fetchedItems.length) {
      throw new Error('No data received from the server.');
    }

    const firstItem = fetchedItems[0] as { posts: PostsType[] };
    const posts = firstItem.posts;
    const post = posts.find((post: PostsType) => post.slug === postId);

    if (!post) {
      return (
        <>
          <Header type="Blog" />
          <NotFound link="/blog" info="Nie znaleziono takiego postu" />
          <Footer />
        </>
      );
    }

    return <PostSiteComponent post={post} allPosts={posts} />;
  } catch (error) {
    console.error('Error fetching post data:', error);
    return <p>Error loading post.</p>;
  }
}

export default PostSite;
