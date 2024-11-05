import TableOfContents from '@/components/UI/TableOfContents/TableOfContents.component';
import PostArticle from '../PostArticle/PostArticle.component';
import s from './PostContent.component.module.scss';

interface PostContentProps {
  content: Array<{ id: number; slug: string; title: string; description: string[] }>;
  sectionName: string;
  isVisible: boolean;
}

const PostContent: React.FC<PostContentProps> = ({ content, sectionName, isVisible }) => (
  <>
    {sectionName !== "Podsumowanie" && isVisible && (
      <TableOfContents content={content} />
    )}
    {content.map(({ id, slug, title, description }) => (
      <PostArticle
        key={title}
        slug={slug}
        title={title}
        description={description}
        id={id}
      />
    ))}
  </>
);

export default PostContent; 