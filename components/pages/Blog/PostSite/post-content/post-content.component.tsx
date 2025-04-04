import { type FC } from 'react';
import { TableOfContents } from '../table-of-contents/table-of-contents.component';
import { PostArticle } from '../post-article/post-article.component';

interface ContentSection {
  id: number;
  slug: string;
  title: string;
  description: string[];
}

interface PostContentProps {
  content: ContentSection[];
  sectionName: string;
  isVisible: boolean;
}

export const PostContent: FC<PostContentProps> = ({ content, sectionName, isVisible }) => (
  <>
    {sectionName !== "Podsumowanie" && isVisible && (
      <TableOfContents content={content} />
    )}
    {content.map(({ id, slug, title, description }) => (
      <PostArticle key={id} slug={slug} title={title} description={description} />
    ))}
  </>
); 