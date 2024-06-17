import Footer from "@/components/UI/FooterBlog/Footer.component.page";
import HomePage from "@/components/pages/Blog/HomePage/HomePage.page";
import Newsletter from "@/components/pages/Blog/Newsletter/Newsletter.page";
import Posts from "@/components/pages/Blog/Posts/Posts.page";
import YTSection from "@/components/pages/Blog/YTSection/YTSection.page";
import React from "react";

function page() {
  return (
    <>
      <HomePage />
      <YTSection />
      <Posts />
      <Newsletter />
      <Footer />
    </>
  );
}

export default page;
