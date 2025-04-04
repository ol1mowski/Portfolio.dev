'use client';

import { useContext, useRef, useEffect } from 'react';
import { PostVisibleContext } from '../../post-provider';

interface UseIntersectionObserverResult {
  ref: React.RefObject<HTMLDivElement>;
}

export const useIntersectionObserver = (sectionTitle: string): UseIntersectionObserverResult => {
  const { setSectionVisible } = useContext(PostVisibleContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setSectionVisible({
                isVisible: true,
                sectionName: sectionTitle
              });
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

      observer.observe(currentRef);

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
    
    return () => {};
  }, [setSectionVisible, sectionTitle]);

  return { ref };
}; 