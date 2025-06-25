import { memo } from 'react';
import dynamic from 'next/dynamic';
import s from './MaterialsGrid.component.module.scss';

import { MaterialType } from '@/types/Materials.types';

const DynamicMaterialCard = dynamic(() => import('../MaterialCard/MaterialCard.component'), {
  loading: () => <div className={s.materialsGrid__cardLoading}>Ładowanie...</div>,
});

interface MaterialsGridProps {
  materials: MaterialType[];
  resultsCount: number;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

const MaterialsGrid = memo(
  ({ materials, resultsCount, hasActiveFilters, onClearFilters }: MaterialsGridProps) => {
    return (
      <section className={s.materialsGrid}>
        <div className={s.materialsGrid__header}>
          <h2 className={s.materialsGrid__title}>Znaleziono {resultsCount} materiałów</h2>
          {hasActiveFilters && (
            <button onClick={onClearFilters} className={s.materialsGrid__clearBtn}>
              <span>Wyczyść filtry</span>
            </button>
          )}
        </div>

        {materials.length > 0 ? (
          <div className={s.materialsGrid__items}>
            {materials.map(material => (
              <DynamicMaterialCard key={material.id} material={material} />
            ))}
          </div>
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
