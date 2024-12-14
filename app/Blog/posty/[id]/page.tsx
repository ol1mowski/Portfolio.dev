import PostSite from "@/components/pages/Blog/PostSite/PostSite.fetching";
import Footer from "@/components/pages/Footer/Footer.page";
import { Params } from "@/types/Params.type";

const page = async ({ params }: { params: Params }) => {
  
   const { id } = await params;
  
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostSite postId={id} />
      <Footer />
    </>
  );
}

export default page;
