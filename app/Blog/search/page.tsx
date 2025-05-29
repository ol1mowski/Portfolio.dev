import { Suspense } from 'react';
import SearchResults from '@/components/pages/Blog/SearchResults/SearchResults.page';
import Header from '@/components/pages/Blog/HeaderBlog/Header.component.page';
import Footer from '@/components/pages/Footer/Footer.page';
import Loading from '@/components/pages/Blog/loading';

export default function SearchPage() {
  return (
    <>
      <Header type="Blog" />
      <Suspense fallback={<Loading />}>
        <SearchResults />
      </Suspense>
      <Footer />
    </>
  );
}
