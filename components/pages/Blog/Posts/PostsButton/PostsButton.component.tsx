import s from './PostsButton.component.module.scss';

function PostsButton() {
  return (
    <div className={s.buttonWrapper}>
      <button className={s.loadMoreButton}>Załaduj więcej artykułów</button>
    </div>
  );
}

export default PostsButton;
