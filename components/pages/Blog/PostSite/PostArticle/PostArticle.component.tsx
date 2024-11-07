'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import s from './PostArticle.component.module.scss'; 
import Caption from '@/components/UI/Caption/Caption.component';


interface PostArticleProps {
  slug: string;
  title: string;
  description: string[];
}

const PostArticle: React.FC<PostArticleProps> = ({ slug, title, description }) => {
  return (
    <section id={slug} className={s.postContentSection}>
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
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
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