import Header from '@/components/pages/Blog/HeaderBlog/Header.component.page';
import NotFound from '@/components/pages/Blog/NotFound/NotFound.page';

interface PostNotFoundProps {
  link: string;
}

const PostNotFound: React.FC<PostNotFoundProps> = ({ link }) => (
  <>
    <Header type="Blog" />
    <NotFound link={link} info="Nie znaleziono takiego postu" />
  </>
);

export default PostNotFound;
