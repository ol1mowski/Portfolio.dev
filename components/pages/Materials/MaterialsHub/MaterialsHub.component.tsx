'use client';

import s from './MaterialsHub.component.module.scss';

import { memo, useState, useMemo, useCallback } from 'react';
import dynamic from 'next/dynamic';

import Header from '@/components/pages/Header/Header.component';
import Footer from '@/components/pages/Footer/Footer.page';
import SearchBar from '../SearchBar/SearchBar.component';
import FilterPanel from '../FilterPanel/FilterPanel.component';

import { MaterialType, SearchFilters } from '@/types/Materials.types';
import { MATERIALS } from '@/data/Materials.data';

const DynamicMaterialCard = dynamic(() => import('../MaterialCard/MaterialCard.component'), {
  loading: () => <div className={s.cardLoading}>Ładowanie...</div>,
});

interface MaterialsHubProps {
  initialMaterials?: MaterialType[];
}

const MaterialsHub = memo(({ initialMaterials = MATERIALS }: MaterialsHubProps) => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    searchTerm: '',
    selectedFilters: {
      type: [],
      category: [],
      categoryType: [],
      tags: [],
    },
  });

  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'title'>('newest');

  const filteredMaterials = useMemo(() => {
    let filtered = [...initialMaterials];

    if (searchFilters.searchTerm) {
      const searchTerm = searchFilters.searchTerm.toLowerCase();
      filtered = filtered.filter(
        material =>
          material.title.toLowerCase().includes(searchTerm) ||
          material.description.toLowerCase().includes(searchTerm) ||
          material.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    if (searchFilters.selectedFilters.type.length > 0) {
      filtered = filtered.filter(material =>
        searchFilters.selectedFilters.type.includes(material.type)
      );
    }

    if (searchFilters.selectedFilters.category.length > 0) {
      filtered = filtered.filter(material =>
        searchFilters.selectedFilters.category.includes(material.category)
      );
    }

    if (searchFilters.selectedFilters.categoryType.length > 0) {
      filtered = filtered.filter(material =>
        searchFilters.selectedFilters.categoryType.includes(material.categoryType)
      );
    }

    switch (sortBy) {
      case 'newest':
        filtered.sort(
          (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        );
        break;
      case 'popular':
        filtered.sort((a, b) => b.downloadCount - a.downloadCount);
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }, [initialMaterials, searchFilters, sortBy]);

  const handleSearchChange = useCallback((searchTerm: string) => {
    setSearchFilters(prev => ({
      ...prev,
      searchTerm,
    }));
  }, []);

  const handleFilterChange = useCallback((filters: SearchFilters['selectedFilters']) => {
    setSearchFilters(prev => ({
      ...prev,
      selectedFilters: filters,
    }));
  }, []);

  const clearAllFilters = useCallback(() => {
    setSearchFilters({
      searchTerm: '',
      selectedFilters: {
        type: [],
        category: [],
        categoryType: [],
        tags: [],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <main className={s.container} aria-label="Centrum materiałów edukacyjnych">
        <section className={s.heroSection}>
          <div className={s.heroContent}>
            <h1 className={s.heroTitle}>
              Centrum <span className={s.gradient}>Materiałów</span>
            </h1>
            <p className={s.heroDescription}>
              Odkryj najlepsze materiały edukacyjne - e-booki, notatki i zasoby dodatkowe. Wszystko
              w jednym miejscu, z zaawansowanym filtrowaniem.
            </p>
          </div>
        </section>

        <section className={s.controlsSection}>
          <div className={s.searchBarWrapper}>
            <SearchBar
              value={searchFilters.searchTerm}
              onChange={handleSearchChange}
              placeholder="Szukaj materiałów, kategorii, tagów..."
            />
          </div>

          <div className={s.filtersAndOptionsWrapper}>
            <div className={s.filtersSection}>
              <FilterPanel
                selectedFilters={searchFilters.selectedFilters}
                onFilterChange={handleFilterChange}
                onClearAll={clearAllFilters}
              />
            </div>

            <div className={s.optionsSection}>
              <div className={s.sortControls}>
                <label htmlFor="sort-select" className={s.sortLabel}>
                  Sortuj:
                </label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                  className={s.sortSelect}
                >
                  <option value="newest">Najnowsze</option>
                  <option value="popular">Najpopularniejsze</option>
                  <option value="title">Alfabetycznie</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className={s.resultsSection}>
          <div className={s.resultsHeader}>
            <h2 className={s.resultsTitle}>Znaleziono {filteredMaterials.length} materiałów</h2>
            {(searchFilters.searchTerm ||
              Object.values(searchFilters.selectedFilters).some(arr => arr.length > 0)) && (
              <button onClick={clearAllFilters} className={s.clearFiltersBtn}>
                <span>Wyczyść filtry</span>
              </button>
            )}
          </div>

          {filteredMaterials.length > 0 ? (
            <div className={s.materialsGrid}>
              {filteredMaterials.map(material => (
                <DynamicMaterialCard key={material.id} material={material} />
              ))}
            </div>
          ) : (
            <div className={s.noResults}>
              <div className={s.noResultsIcon}>🔍</div>
              <h3>Nie znaleziono materiałów</h3>
              <p>Spróbuj zmienić kryteria wyszukiwania lub wyczyść filtry.</p>
              <button onClick={clearAllFilters} className={s.clearFiltersBtn}>
                <span>Wyczyść wszystkie filtry</span>
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
});

MaterialsHub.displayName = 'MaterialsHub';

export default MaterialsHub;
