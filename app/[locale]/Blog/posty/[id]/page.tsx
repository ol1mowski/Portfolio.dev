import PostSiteComponent from '@/components/pages/Blog/PostSite/PostSite.logic';
import Footer from '@/components/pages/Footer/Footer.page';
import { getBlogPosts, getPostBySlug } from '@/actions/blog';
import { Params } from '@/types/Params.types';

const page = async ({ params }: { params: Params }) => {
  const { id } = await params;

  const [post, allPosts] = await Promise.all([getPostBySlug(id), getBlogPosts()]);

  if (!post || !allPosts) {
    return (
      <>
        <div>Nie znaleziono postu</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <PostSiteComponent post={post} allPosts={allPosts} />
      <Footer />
    </>
  );
};

export default page;
