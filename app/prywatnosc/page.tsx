import Header from "@/components/UI/Header/Header.component";
import Privacy from "@/components/pages/Blog/Privacy/Privacy.page";
import Footer from "@/components/pages/Footer/Footer.page";
import Head from "next/head";

function page() {
  return (
    <>
      <Head>
        <title>Polityka Prywatnści</title>
        <meta name="description" content="Zakładka Polityka" />
      </Head>
      <Header type="out" />
      <Privacy />
      <Footer />
    </>
  );
}

export default page;
