import { memo } from 'react';
import s from './MaterialsControls.component.module.scss';

import SearchBar from '../SearchBar/SearchBar.component';
import FilterPanel from '../FilterPanel/FilterPanel.component';
import { FilterOptions } from '@/types/Materials.types';
import { SortOption } from './hooks/useMaterialsSorting.hook';

interface MaterialsControlsProps {
  searchTerm: string;
  selectedFilters: FilterOptions;
  sortBy: SortOption;
  loading?: boolean;
  onSearchChange: (term: string) => void;
  onFilterChange: (filters: FilterOptions) => void;
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClearFilters: () => void;
}

const MaterialsControls = memo(
  ({
    searchTerm,
    selectedFilters,
    sortBy,
    loading = false,
    onSearchChange,
    onFilterChange,
    onSortChange,
    onClearFilters,
  }: MaterialsControlsProps) => {
    return (
      <section className={s.materialsControls}>
        <div className={s.materialsControls__searchWrapper}>
          <SearchBar
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Szukaj materiałów, kategorii, tagów..."
            loading={loading}
          />
        </div>

        <div className={s.materialsControls__filtersWrapper}>
          <div className={s.materialsControls__filtersSection}>
            <FilterPanel
              selectedFilters={selectedFilters}
              onFilterChange={onFilterChange}
              onClearAll={onClearFilters}
            />
          </div>

          <div className={s.materialsControls__optionsSection}>
            <div className={s.materialsControls__sortControls}>
              <label htmlFor="materials-sort-select" className={s.materialsControls__sortLabel}>
                Sortuj:
              </label>
              <select
                id="materials-sort-select"
                value={sortBy}
                onChange={onSortChange}
                className={s.materialsControls__sortSelect}
              >
                <option value="newest">Najnowsze</option>
                <option value="popular">Najpopularniejsze</option>
                <option value="title">Alfabetycznie</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.searchTerm === nextProps.searchTerm &&
      prevProps.loading === nextProps.loading &&
      prevProps.sortBy === nextProps.sortBy &&
      JSON.stringify(prevProps.selectedFilters) === JSON.stringify(nextProps.selectedFilters)
    );
  }
);

MaterialsControls.displayName = 'MaterialsControls';

export default MaterialsControls;
