'use client';

import s from './TagPage.page.module.scss';
import Header from '../HeaderBlog/Header.component.page';
import { Loading, ErrorMessage } from '@/components/UI/shared';
import { TagPageHeader } from './components/TagPageHeader/TagPageHeader.component';
import { TagPageContent } from './components/TagPageContent/TagPageContent.component';
import { useTagPageData } from './hooks/useTagPageData.hook';

interface TagPageProps {
  tag: string;
}

const TagPage = ({ tag }: TagPageProps) => {
  const { posts, loading, error, loadingMore, hasMore, cleanTag, fetchPosts, handleLoadMore } =
    useTagPageData(tag);

  if (loading) {
    return (
      <>
        <Header type="Blog" />
        <div className={s.container}>
          <Loading message={`Ładowanie postów z tagiem #${cleanTag}...`} />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header type="Blog" />
        <div className={s.container}>
          <ErrorMessage message={error} variant="page" showRetry onRetry={() => fetchPosts(true)} />
        </div>
      </>
    );
  }

  return (
    <>
      <Header type="Blog" />
      <div className={s.container}>
        <TagPageHeader cleanTag={cleanTag} postsCount={posts.length} />
        <TagPageContent
          posts={posts}
          hasMore={hasMore}
          loadingMore={loadingMore}
          onLoadMore={handleLoadMore}
          cleanTag={cleanTag}
        />
      </div>
    </>
  );
};

export default TagPage;
