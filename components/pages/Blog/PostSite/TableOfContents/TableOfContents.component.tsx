'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import s from './TableOfContents.component.module.scss';
import PostVisibleContext from '@/store/PostVisible.context';

interface TableOfContentsProps {
  content: Array<{ id: number; slug: string; title: string }>;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const { sectionVisible } = useContext(PostVisibleContext);
  const { isVisible, sectionName } = sectionVisible;

  const header = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleScroll = () => {
    if (header.current) {
      if (window.scrollY > 610) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={header} className={`${isSticky ? s.tableOfContents_sticky : s.tableOfContents}`}>
      <h3 className={s.tableOfContents__caption}>Spis Treści</h3>
      <ul className={s.tableOfContents__listItems}>
        {content.map(item => (
          <a key={item.id} href={`#${item.slug}`}>
            <li
              className={
                sectionName === item.title && isVisible
                  ? `${s.tableOfContents__listItems__item_active}`
                  : `${s.tableOfContents__listItems__item}`
              }
            >
              {item.title}
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default TableOfContents;
