import { useMemo, useCallback, useState } from 'react';
import { MaterialType } from '@/types/Materials.types';

export type SortOption = 'newest' | 'popular' | 'title';

interface UseMaterialsSortingProps {
  materials: MaterialType[];
}

interface UseMaterialsSortingReturn {
  sortedMaterials: MaterialType[];
  sortBy: SortOption;
  setSortBy: (sortBy: SortOption) => void;
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const useMaterialsSorting = ({
  materials,
}: UseMaterialsSortingProps): UseMaterialsSortingReturn => {
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const sortedMaterials = useMemo(() => {
    const sorted = [...materials];

    switch (sortBy) {
      case 'newest':
        sorted.sort(
          (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        );
        break;
      case 'popular':
        sorted.sort((a, b) => b.downloadCount - a.downloadCount);
        break;
      case 'title':
        sorted.sort((a, b) => a.title.localeCompare(b.title, 'pl'));
        break;
      default:
        break;
    }

    return sorted;
  }, [materials, sortBy]);

  const handleSortChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as SortOption);
  }, []);

  return {
    sortedMaterials,
    sortBy,
    setSortBy,
    handleSortChange,
  };
};
