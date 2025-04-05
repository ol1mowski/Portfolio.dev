'use client';

import { type FC, useContext, useRef } from 'react';
import { PostVisibleContext } from '../../post-provider';
import { useSticky } from './use-sticky.hook';
import s from './table-of-contents.module.scss';

interface ContentItem {
  id: number;
  slug: string;
  title: string;
}

interface TableOfContentsProps {
  content: ContentItem[];
}

export const TableOfContents: FC<TableOfContentsProps> = ({ content }) => {
  const { sectionVisible } = useContext(PostVisibleContext);
  const { isVisible, sectionName } = sectionVisible;
  const headerRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSticky(headerRef, 610);

  return (
    <section
      ref={headerRef}
      className={isSticky ? s.tableOfContents_sticky : s.tableOfContents}
    >
      <h3 className={s.tableOfContents__caption}>Spis Treści</h3>
      <ul className={s.tableOfContents__listItems}>
        {content.map((item) => (
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