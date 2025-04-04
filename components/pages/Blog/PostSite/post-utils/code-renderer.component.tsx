import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import s from './code-renderer.module.scss';

export const CodeRenderer = ({ inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || '');
  
  return !inline && match ? (
    <SyntaxHighlighter
      style={vscDarkPlus}
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={s.inlineCode} {...props}>
      {children}
    </code>
  );
}; 