'use client';

import { Suspense } from 'react';
import Footer from '@/components/pages/Footer/Footer.page';
import Header from '@/components/pages/Header/Header.component';
import UnsubscribeContent from './components/UnsubscribeContent/UnsubscribeContent.component';
import LoadingFallback from './components/LoadingFallback/LoadingFallback.component';

export default function UnsubscribePage() {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <UnsubscribeContent />
      </Suspense>
      <Footer />
    </>
  );
}
