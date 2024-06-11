
import logo from "@/assets/logo_black.svg";

import hamburger from '@/assets/hamburger_black.svg';
import Header from "@/components/UI/HeaderBlog/Header.component.page";
import HamburgerMenu from "@/components/UI/HeaderBlog/HamburgerMenu/HamburgerMenu.contextWrapper";
import Privacy from "@/components/pages/Blog/Privacy/Privacy.page";
import Footer from "@/components/UI/FooterBlog/Footer.component.page";


function page() {
  return (
    <>
      <Header logo={logo} hamburger={hamburger}/>
      <HamburgerMenu />
      <Privacy />
      <Footer />
    </>
  );
}

export default page;
