'use client';

import { type FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Caption from '@/components/UI/Caption/Caption.component';
import { useIntersectionObserver } from './use-intersection-observer.hook';
import { CodeRenderer } from '../post-utils/code-renderer.component';
import s from './post-article.module.scss';

interface PostArticleProps {
  slug: string;
  title: string;
  description: string[];
}

export const PostArticle: FC<PostArticleProps> = ({
  slug,
  title,
  description,
}) => {
  const { ref } = useIntersectionObserver(title);

  return (
    <section ref={ref} id={slug} className={s.postContentSection}>
      <Caption type="sub" value={title} />
      {description.map((desc, index) => (
        <ReactMarkdown
          key={index}
          remarkPlugins={[remarkGfm]}
          className={s.postContentSection__text}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className={s.customHeading} {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className={s.customHeading} {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className={s.customParagraph} {...props} />
            ),
            code: CodeRenderer,
          }}
        >
          {desc}
        </ReactMarkdown>
      ))}
    </section>
  );
}; 