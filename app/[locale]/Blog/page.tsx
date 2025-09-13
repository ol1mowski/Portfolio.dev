import HomePageComponent from '@/components/pages/Blog/HomePage/HomePage.page';
import PostsComponent from '@/components/pages/Blog/Posts/Posts.page';
import Footer from '@/components/pages/Footer/Footer.page';
import { getBlogPosts } from '@/actions/blog';
import { getTranslations } from 'next-intl/server';

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const t = await getTranslations('blog');

  if (!posts) {
    return (
      <>
        <div>{t('loadingError')}</div>
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
