import s from './PostsButton.component.module.scss';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

function PostsButton() {
  const t = useOptimizedTranslations('blog');

  return (
    <div className={s.buttonWrapper}>
      <button className={s.loadMoreButton}>{t('loadMore.button')}</button>
    </div>
  );
}

export default PostsButton;
