import Button from "@/components/UI/Button/Button.component";
import s from './PostsButton.component.module.scss';

function PostsButton() {
  return (
    <section className={s.buttonWrapper}>
      <Button value="Więcej" type="normal" />
    </section>
  );
}

export default PostsButton;
