'use client';

import { Suspense } from 'react';
import { useAnchorScroll } from '@/hooks/useAnchorScroll';

function AnchorScrollWrapper({ children }: { children: React.ReactNode }) {
  useAnchorScroll();
  return <>{children}</>;
}

export default function AnchorScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <AnchorScrollWrapper>{children}</AnchorScrollWrapper>
    </Suspense>
  );
}
