'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import s from './PostArticle.component.module.scss';
import Caption from '@/components/UI/Caption/Caption.component';
import PostVisibleContext from '@/store/PostVisible.context';
import { useContext, useRef, useEffect } from 'react';

interface PostArticleProps {
  slug: string;
  title: string;
  description: string[];
}

const PostArticle: React.FC<PostArticleProps> = ({ slug, title, description }) => {
  const { setSectionVisible } = useContext(PostVisibleContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setSectionVisible(title, true);
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
    } else {
      setSectionVisible(title, false);
    }
  }, [setSectionVisible, title]);

  return (
    <section ref={ref} id={slug} className={s.postContentSection}>
      <Caption type="sub" value={title} />
      {description.map((desc, index) => (
        <ReactMarkdown
          key={index}
          remarkPlugins={[remarkGfm]}
          className={s.postContentSection__text}
          components={{
            h1: ({ node, ...props }) => <h1 className={s.customHeading} {...props} />,
            h2: ({ node, ...props }) => <h2 className={s.customHeading} {...props} />,
            p: ({ node, ...props }) => <p className={s.customParagraph} {...props} />,
            code({ inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <pre className={`${s.codeBlock} ${match ? `language-${match[1]}` : ''}`} {...props}>
                  <code>{String(children).replace(/\n$/, '')}</code>
                </pre>
              ) : (
                <code className={s.inlineCode} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {desc}
        </ReactMarkdown>
      ))}
    </section>
  );
};

export default PostArticle;
