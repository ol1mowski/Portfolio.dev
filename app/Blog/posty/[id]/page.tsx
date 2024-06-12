import Footer from "@/components/UI/FooterBlog/Footer.component.page";
import HamburgerMenu from "@/components/UI/HeaderBlog/HamburgerMenu/HamburgerMenu.contextWrapper";
import PostSite from "@/components/pages/Blog/PostSite/PostSite.logic";

function page({ params }: { params: { id: string } }) {
  
  if (params) {
    console.log(params.id);
  }

  return (
    <>
      <PostSite />
      <HamburgerMenu />
      <Footer />
    </>
  );
}

export default page;
