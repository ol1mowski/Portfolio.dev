import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export const useAnchorScroll = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
          });
        }
      }, 200);
    }
  }, [searchParams]);
};
