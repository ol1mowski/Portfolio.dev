'use client';

import s from './MaterialsHub.component.module.scss';

import { memo } from 'react';

import Header from '@/components/pages/Header/Header.component';
import Footer from '@/components/pages/Footer/Footer.page';
import MaterialsHeader from '../MaterialsHeader/MaterialsHeader.component';
import MaterialsControls from '../MaterialsControls/MaterialsControls.component';
import MaterialsGrid from '../MaterialsGrid/MaterialsGrid.component';

import { useMaterialsSearch } from './hooks/useMaterialsSearch.hook';
import { useMaterialsSorting } from '../MaterialsControls/hooks/useMaterialsSorting.hook';
import { useMaterialsFetching } from './hooks/useMaterialsFetching.hook';

interface MaterialsHubProps {
  initialMaterials?: any[];
}

const MaterialsHub = memo(({ initialMaterials = [] }: MaterialsHubProps) => {
  const { searchTerm, selectedFilters, handleSearchChange, handleFilterChange, clearAllFilters } =
    useMaterialsSearch();

  const { sortBy, handleSortChange } = useMaterialsSorting({
    materials: initialMaterials,
  });

  const { materials, loading, error, pagination, refetch, loadMore } = useMaterialsFetching({
    searchTerm,
    selectedFilters,
  });

  const { sortedMaterials } = useMaterialsSorting({
    materials: materials,
  });

  if (error) {
    return (
      <>
        <Header />
        <main className={s.container} aria-label="Centrum materiałów edukacyjnych">
          <MaterialsHeader />
          <div className={s.errorContainer}>
            <h2>Błąd podczas ładowania materiałów</h2>
            <p>{error}</p>
            <button onClick={refetch} className={s.retryButton}>
              Spróbuj ponownie
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={s.container} aria-label="Centrum materiałów edukacyjnych">
        <MaterialsHeader />

        <MaterialsControls
          searchTerm={searchTerm}
          selectedFilters={selectedFilters}
          sortBy={sortBy}
          onSearchChange={handleSearchChange}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          onClearFilters={clearAllFilters}
        />

        <MaterialsGrid
          materials={sortedMaterials}
          resultsCount={materials.length}
          hasActiveFilters={Object.values(selectedFilters).some(filters => filters.length > 0)}
          onClearFilters={clearAllFilters}
          loading={loading}
          onLoadMore={loadMore}
          hasMore={pagination.page < pagination.pages}
        />
      </main>
      <Footer />
    </>
  );
});

MaterialsHub.displayName = 'MaterialsHub';

export default MaterialsHub;
