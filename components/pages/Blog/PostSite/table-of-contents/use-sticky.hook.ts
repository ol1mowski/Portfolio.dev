import { RefObject, useState, useEffect } from 'react';

interface UseStickyResult {
  isSticky: boolean;
}

export const useSticky = (
  elementRef: RefObject<HTMLElement>,
  threshold: number = 0
): UseStickyResult => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        setIsSticky(window.scrollY > threshold);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef, threshold]);

  return { isSticky };
}; 