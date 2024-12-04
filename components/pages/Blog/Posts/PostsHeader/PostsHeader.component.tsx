import Caption from "@/components/UI/Caption/Caption.component";
import s from './PostsHeader.component.module.scss';

function PostsHeader() {
  return (
    <section className={s.header}>
      <Caption type="sub" value="Ostatnie Posty" />
    </section>
  );
}

export default PostsHeader;
