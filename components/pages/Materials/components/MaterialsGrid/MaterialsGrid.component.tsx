import { memo } from 'react';
import dynamic from 'next/dynamic';
import s from './MaterialsGrid.component.module.scss';
import { MaterialType } from '@/types/Materials.types';
import { Loading } from '@/components/UI/shared';

const DynamicMaterialCard = dynamic(() => import('../MaterialCard/MaterialCard.component'), {
  loading: () => <Loading message="Ładowanie karty..." size="small" />,
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
    return (
      <section className={s.materialsGrid}>
        <div className={s.materialsGrid__header}>
          <h2 className={s.materialsGrid__title}>
            {loading ? 'Ładowanie...' : `Znaleziono ${resultsCount} materiałów`}
          </h2>
          {hasActiveFilters && (
            <button onClick={onClearFilters} className={s.materialsGrid__clearBtn}>
              <span>Wyczyść filtry</span>
            </button>
          )}
        </div>

        {loading && materials.length === 0 ? (
          <Loading message="Ładowanie materiałów..." />
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
                  {loading ? 'Ładowanie...' : 'Załaduj więcej'}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={s.materialsGrid__noResults}>
            <div className={s.materialsGrid__noResultsIcon}>🔍</div>
            <h3 className={s.materialsGrid__noResultsTitle}>Nie znaleziono materiałów</h3>
            <p className={s.materialsGrid__noResultsText}>
              Spróbuj zmienić kryteria wyszukiwania lub wyczyść filtry.
            </p>
            <button onClick={onClearFilters} className={s.materialsGrid__clearBtn}>
              <span>Wyczyść wszystkie filtry</span>
            </button>
          </div>
        )}
      </section>
    );
  }
);

MaterialsGrid.displayName = 'MaterialsGrid';

export default MaterialsGrid;
