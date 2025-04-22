import Footer from '@/components/pages/Footer/Footer.page';
import Header from '@/components/pages/Header/Header.component';
import Head from 'next/head';
import Privacy from './Privacy/Privacy.page';

function page() {
  return (
    <>
      <Head>
        <title>Polityka Prywatnści</title>
        <meta name="description" content="Zakładka Polityka" />
      </Head>
      <Header />
      <Privacy />
      <Footer />
    </>
  );
}

export default page;
