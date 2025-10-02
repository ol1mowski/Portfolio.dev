'use client';

import s from './MaterialsHub.component.module.scss';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

import { memo, useCallback, useEffect } from 'react';

import Header from '@/components/pages/Header/Header.component';
import Footer from '@/components/pages/Footer/Footer.page';
import MaterialsHeader from '../MaterialsHeader/MaterialsHeader.component';
import MaterialsControls from '../MaterialsControls/MaterialsControls.component';
import MaterialsGrid from '../MaterialsGrid/MaterialsGrid.component';

import { useMaterialsSearch } from './hooks/useMaterialsSearch.hook';
import { useMaterialsSorting } from '../MaterialsControls/hooks/useMaterialsSorting.hook';
import { useMaterialsFetching } from './hooks/useMaterialsFetching.hook';
import { useDownloadCount } from './hooks/useDownloadCount.hook';
import { MaterialType } from '@/types/Materials.types';

interface MaterialsHubProps {
  initialMaterials?: MaterialType[];
}

const MaterialsHub = memo(({ initialMaterials = [] }: MaterialsHubProps) => {
  const t = useOptimizedTranslations('materials');

  const {
    searchTerm,
    debouncedSearchTerm,
    selectedFilters,
    handleSearchChange,
    handleFilterChange,
    clearAllFilters,
  } = useMaterialsSearch();

  const { sortBy, handleSortChange } = useMaterialsSorting({
    materials: initialMaterials,
  });

  const {
    materials: fetchedMaterials,
    loading,
    error,
    pagination,
    refetch,
    loadMore,
  } = useMaterialsFetching({
    searchTerm: debouncedSearchTerm,
    selectedFilters,
  });

  const { materials, updateDownloadCount, updateMaterials } = useDownloadCount({
    initialMaterials: fetchedMaterials,
  });

  useEffect(() => {
    updateMaterials(fetchedMaterials);
  }, [fetchedMaterials, updateMaterials]);

  const { sortedMaterials } = useMaterialsSorting({
    materials: materials,
  });

  const handleSearchChangeStable = useCallback(handleSearchChange, [handleSearchChange]);
  const handleFilterChangeStable = useCallback(handleFilterChange, [handleFilterChange]);
  const handleSortChangeStable = useCallback(handleSortChange, [handleSortChange]);
  const clearAllFiltersStable = useCallback(clearAllFilters, [clearAllFilters]);

  if (error) {
    return (
      <>
        <Header />
        <main className={s.container} aria-label={t('emailGate.title')}>
          <MaterialsHeader />
          <div className={s.errorContainer}>
            <h2>{t('emailGate.loadingError')}</h2>
            <p>{error}</p>
            <button onClick={refetch} className={s.retryButton}>
              {t('emailGate.retry')}
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
      <main className={s.container} aria-label={t('emailGate.title')}>
        <MaterialsHeader />

        <MaterialsControls
          searchTerm={searchTerm}
          selectedFilters={selectedFilters}
          sortBy={sortBy}
          loading={loading}
          onSearchChange={handleSearchChangeStable}
          onFilterChange={handleFilterChangeStable}
          onSortChange={handleSortChangeStable}
          onClearFilters={clearAllFiltersStable}
        />

        <MaterialsGrid
          materials={sortedMaterials}
          resultsCount={materials.length}
          hasActiveFilters={Object.values(selectedFilters).some(filters => filters.length > 0)}
          onClearFilters={clearAllFiltersStable}
          loading={loading}
          onLoadMore={loadMore}
          hasMore={pagination.page < pagination.pages}
          onDownload={updateDownloadCount}
        />
      </main>
      <Footer />
    </>
  );
});

MaterialsHub.displayName = 'MaterialsHub';

export default MaterialsHub;
