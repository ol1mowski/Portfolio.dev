import HomePage from '@/components/pages/Blog/HomePage/HomePage.fetching';
import Posts from '@/components/pages/Blog/Posts/Posts.fetching';
import Footer from '@/components/pages/Footer/Footer.page';

export default async function BlogPage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <HomePage />
      {/* @ts-expect-error Async Server Component */}
      <Posts />
      <Footer />
    </>
  );
}
