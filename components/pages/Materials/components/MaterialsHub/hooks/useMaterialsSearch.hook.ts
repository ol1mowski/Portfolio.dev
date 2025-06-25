import { useState, useCallback } from 'react';
import { FilterOptions } from '@/types/Materials.types';

interface UseMaterialsSearchReturn {
  searchTerm: string;
  selectedFilters: FilterOptions;
  setSearchTerm: (term: string) => void;
  setSelectedFilters: (filters: FilterOptions) => void;
  handleSearchChange: (term: string) => void;
  handleFilterChange: (filters: FilterOptions) => void;
  clearAllFilters: () => void;
}

const initialFilters: FilterOptions = {
  type: [],
  category: [],
  categoryType: [],
  tags: [],
};

export const useMaterialsSearch = (): UseMaterialsSearchReturn => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>(initialFilters);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleFilterChange = useCallback((filters: FilterOptions) => {
    setSelectedFilters(filters);
  }, []);

  const clearAllFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedFilters(initialFilters);
  }, []);

  return {
    searchTerm,
    selectedFilters,
    setSearchTerm,
    setSelectedFilters,
    handleSearchChange,
    handleFilterChange,
    clearAllFilters,
  };
};
