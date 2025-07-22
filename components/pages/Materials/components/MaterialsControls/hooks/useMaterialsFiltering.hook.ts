import { useMemo } from 'react';
import { MaterialType, FilterOptions } from '@/types/Materials.types';

interface UseMaterialsFilteringProps {
  materials: MaterialType[];
  selectedFilters: FilterOptions;
  searchTerm: string;
}

interface UseMaterialsFilteringReturn {
  filteredMaterials: MaterialType[];
  hasActiveFilters: boolean;
  activeFiltersCount: number;
}

export const useMaterialsFiltering = ({
  materials,
  selectedFilters,
  searchTerm,
}: UseMaterialsFilteringProps): UseMaterialsFilteringReturn => {
  const filteredMaterials = useMemo(() => {
    let filtered = [...materials];

    // Search term filtering
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        material =>
          material.title.toLowerCase().includes(searchLower) ||
          material.description.toLowerCase().includes(searchLower) ||
          material.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
          material.category.toLowerCase().includes(searchLower)
      );
    }

    // Type filtering
    if (selectedFilters.type.length > 0) {
      filtered = filtered.filter(material => selectedFilters.type.includes(material.type));
    }

    // Category filtering
    if (selectedFilters.category.length > 0) {
      filtered = filtered.filter(material => selectedFilters.category.includes(material.category));
    }

    // Category type filtering
    if (selectedFilters.categoryType.length > 0) {
      filtered = filtered.filter(material =>
        selectedFilters.categoryType.includes(material.categoryType)
      );
    }

    return filtered;
  }, [materials, selectedFilters, searchTerm]);

  const activeFiltersCount = useMemo(() => {
    return Object.values(selectedFilters).reduce((acc, filters) => acc + filters.length, 0);
  }, [selectedFilters]);

  const hasActiveFilters = useMemo(() => {
    return searchTerm.trim() !== '' || activeFiltersCount > 0;
  }, [searchTerm, activeFiltersCount]);

  return {
    filteredMaterials,
    hasActiveFilters,
    activeFiltersCount,
  };
};
