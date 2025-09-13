import s from './PostsButton.component.module.scss';
import { useTranslations } from 'next-intl';

function PostsButton() {
  const t = useTranslations('blog');

  return (
    <div className={s.buttonWrapper}>
      <button className={s.loadMoreButton}>{t('loadMore.button')}</button>
    </div>
  );
}

export default PostsButton;
