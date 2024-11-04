import Head from "next/head";

import Footer from "@/components/UI/FooterBlog/Footer.component.page";
import HomePage from "@/components/pages/Blog/HomePage/HomePage.fetching";
import Posts from "@/components/pages/Blog/Posts/Posts.fetching";

function page() {
  return (
    <>
      <HomePage />
      <Posts />
      <Footer />
    </>
  );
}

export default page;
