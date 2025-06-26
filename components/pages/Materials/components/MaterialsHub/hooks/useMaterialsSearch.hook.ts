import { useState, useCallback, useEffect, useMemo } from 'react';
import { FilterOptions } from '@/types/Materials.types';

interface UseMaterialsSearchReturn {
  searchTerm: string;
  debouncedSearchTerm: string;
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
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');
  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>(initialFilters);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

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

  const result = useMemo(
    () => ({
      searchTerm,
      debouncedSearchTerm,
      selectedFilters,
      setSearchTerm,
      setSelectedFilters,
      handleSearchChange,
      handleFilterChange,
      clearAllFilters,
    }),
    [
      searchTerm,
      debouncedSearchTerm,
      selectedFilters,
      handleSearchChange,
      handleFilterChange,
      clearAllFilters,
    ]
  );

  return result;
};
