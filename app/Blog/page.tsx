import Footer from "@/components/UI/FooterBlog/Footer.component.page";
import HomePage from "@/components/pages/Blog/HomePage/HomePage.fetching";
// import Newsletter from "@/components/pages/Blog/Newsletter/Newsletter.page";
import Posts from "@/components/pages/Blog/Posts/Posts.fetching";
import YTSection from "@/components/pages/Blog/YTSection/YTSection.page";
import GoodStart from "@/components/pages/GoodStart/GoodStart.page";
import React from "react";
import EbookSection from "./Ebook/EbookSection.page";
import Head from "next/head";

function page() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Blog o Tworzeniu Stron Internetowych"
        />
      </Head>
      <HomePage />
      <EbookSection />
      <YTSection />
      <Posts />
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}

export default page;
