import TableOfContents from "@/components/pages/Blog/PostSite/TableOfContents/TableOfContents.component";
import PostArticle from "../PostArticle/PostArticle.component";

interface PostContentProps {
  content: Array<{
    id: number;
    slug: string;
    title: string;
    description: string[];
  }>;
  sectionName: string;
  isVisible: boolean;
}

const PostContent: React.FC<PostContentProps> = ({ content, sectionName, isVisible }) => (
  <>
    {sectionName !== "Podsumowanie" && isVisible && (
      <TableOfContents content={content} />
    )}
    {content.map(({ id, slug, title, description }) => (
      <PostArticle key={id} slug={slug} title={title} description={description} />
    ))}
  </>
);

export default PostContent;

