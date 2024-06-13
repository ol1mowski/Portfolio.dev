"use client";


import Footer from "@/components/UI/FooterBlog/Footer.component.page";
import HamburgerMenu from "@/components/UI/HeaderBlog/HamburgerMenu/HamburgerMenu.contextWrapper";
import PostSite from "@/components/pages/Blog/PostSite/PostSite.logic";
import UrlSlug from "@/store/UrlSlug.context";
import { useContext } from "react";

function page({ params }: { params: { id: string } }) {
  const { setUrlSlug } = useContext(UrlSlug);

  if (params) {
    setUrlSlug(params.id);
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
