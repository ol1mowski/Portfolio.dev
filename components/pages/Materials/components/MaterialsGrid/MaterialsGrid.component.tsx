import { memo } from 'react';
import dynamic from 'next/dynamic';
import s from './MaterialsGrid.component.module.scss';
import { MaterialType } from '@/types/Materials.types';
import { Loading } from '@/components/UI/shared';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

const DynamicMaterialCard = dynamic(() => import('../MaterialCard/MaterialCard.component'), {
  loading: () => <Loading message="Loading card..." size="small" />,
});

interface MaterialsGridProps {
  materials: MaterialType[];
  resultsCount: number;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
  loading?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
  onDownload?: (materialId: string) => void;
}

const MaterialsGrid = memo(
  ({
    materials,
    resultsCount,
    hasActiveFilters,
    onClearFilters,
    loading = false,
    onLoadMore,
    hasMore = false,
    onDownload,
  }: MaterialsGridProps) => {
    const t = useOptimizedTranslations('materials.grid');

    return (
      <section className={s.materialsGrid}>
        <div className={s.materialsGrid__header}>
          <h2 className={s.materialsGrid__title}>
            {loading ? t('loading') : t('foundMaterials', { count: resultsCount })}
          </h2>
          {hasActiveFilters && (
            <button onClick={onClearFilters} className={s.materialsGrid__clearBtn}>
              <span>{t('clearFilters')}</span>
            </button>
          )}
        </div>

        {loading && materials.length === 0 ? (
          <Loading message={t('loadingMaterials')} />
        ) : materials.length > 0 ? (
          <>
            <div className={s.materialsGrid__items}>
              {materials.map(material => (
                <DynamicMaterialCard
                  key={material.description}
                  material={material}
                  onDownload={onDownload}
                />
              ))}
            </div>

            {hasMore && onLoadMore && (
              <div className={s.materialsGrid__loadMore}>
                <button
                  onClick={onLoadMore}
                  className={s.materialsGrid__loadMoreBtn}
                  disabled={loading}
                >
                  {loading ? t('loading') : 'Load more results'}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={s.materialsGrid__noResults}>
            <div className={s.materialsGrid__noResultsIcon}>🔍</div>
            <h3 className={s.materialsGrid__noResultsTitle}>{t('noResults.title')}</h3>
            <p className={s.materialsGrid__noResultsText}>{t('noResults.text')}</p>
            <button onClick={onClearFilters} className={s.materialsGrid__clearBtn}>
              <span>{t('clearAllFilters')}</span>
            </button>
          </div>
        )}
      </section>
    );
  }
);

MaterialsGrid.displayName = 'MaterialsGrid';

export default MaterialsGrid;
