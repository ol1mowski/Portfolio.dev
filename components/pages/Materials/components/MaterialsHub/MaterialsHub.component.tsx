'use client';

import s from './MaterialsHub.component.module.scss';

import { memo } from 'react';

import Header from '@/components/pages/Header/Header.component';
import Footer from '@/components/pages/Footer/Footer.page';
import MaterialsHeader from '../MaterialsHeader/MaterialsHeader.component';
import MaterialsControls from '../MaterialsControls/MaterialsControls.component';
import MaterialsGrid from '../MaterialsGrid/MaterialsGrid.component';

import { MaterialType } from '@/types/Materials.types';
import { MATERIALS } from '@/data/Materials.data';

import { useMaterialsSearch } from './hooks/useMaterialsSearch.hook';
import { useMaterialsFiltering } from '../MaterialsControls/hooks/useMaterialsFiltering.hook';
import { useMaterialsSorting } from '../MaterialsControls/hooks/useMaterialsSorting.hook';

interface MaterialsHubProps {
  initialMaterials?: MaterialType[];
}

const MaterialsHub = memo(({ initialMaterials = MATERIALS }: MaterialsHubProps) => {
  const { searchTerm, selectedFilters, handleSearchChange, handleFilterChange, clearAllFilters } =
    useMaterialsSearch();

  const { sortBy, handleSortChange } = useMaterialsSorting({
    materials: initialMaterials,
  });

  const { filteredMaterials, hasActiveFilters } = useMaterialsFiltering({
    materials: initialMaterials,
    selectedFilters,
    searchTerm,
  });

  const { sortedMaterials } = useMaterialsSorting({
    materials: filteredMaterials,
  });

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
          resultsCount={filteredMaterials.length}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={clearAllFilters}
        />
      </main>
      <Footer />
    </>
  );
});

MaterialsHub.displayName = 'MaterialsHub';

export default MaterialsHub;
