import HomePageComponent from '@/components/pages/Blog/HomePage/HomePage.page';
import PostsComponent from '@/components/pages/Blog/Posts/Posts.page';
import Footer from '@/components/pages/Footer/Footer.page';
import { getBlogPosts } from '@/actions/blog';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  if (!posts) {
    return (
      <>
        <div>Błąd podczas ładowania bloga</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <HomePageComponent posts={posts} />
      <PostsComponent posts={posts} />
      <Footer />
    </>
  );
}
