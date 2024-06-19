import logo from "@/assets/logo_black.svg";

import hamburger from "@/assets/hamburger_black.svg";
import Header from "@/components/UI/HeaderBlog/Header.component.page";
import Privacy from "@/components/pages/Blog/Privacy/Privacy.page";
import Footer from "@/components/UI/FooterBlog/Footer.component.page";

function page() {
  return (
    <>
      <Header type="Blog" logo={logo} hamburger={hamburger} />
      <Privacy />
      <Footer />
    </>
  );
}

export default page;
