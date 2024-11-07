import Button from "@/components/UI/Button/Button.component";
import s from './PostsButton.component.module.scss';

function PostsButton() {
  return (
    <section className={s.buttonWrapper} aria-label="Load More">
      <Button value="Więcej" type="small" />
    </section>
  );
}

export default PostsButton;
