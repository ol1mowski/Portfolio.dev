import { useState, useEffect } from 'react';
import { MaterialType } from '@/types/Materials.types';

interface UseMaterialsFetchingProps {
  searchTerm?: string;
  selectedFilters?: {
    type: string[];
    category: string[];
    categoryType: string[];
    tags: string[];
  };
}

interface ApiResponse {
  success: boolean;
  data: MaterialType[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export const useMaterialsFetching = ({
  searchTerm,
  selectedFilters,
}: UseMaterialsFetchingProps) => {
  const [materials, setMaterials] = useState<MaterialType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 50,
    total: 0,
    pages: 0,
  });

  const fetchMaterials = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();

      if (page > 1) {
        params.append('page', page.toString());
      }

      if (searchTerm) {
        params.append('search', searchTerm);
      }

      if (selectedFilters) {
        if (selectedFilters.type.length > 0) {
          params.append('type', selectedFilters.type[0]);
        }

        if (selectedFilters.category.length > 0) {
          params.append('category', selectedFilters.category[0]);
        }

        if (selectedFilters.categoryType.length > 0) {
          params.append('categoryType', selectedFilters.categoryType[0]);
        }

        if (selectedFilters.tags.length > 0) {
          params.append('tags', selectedFilters.tags.join(','));
        }
      }

      const response = await fetch(`/api/materials?${params.toString()}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: ApiResponse = await response.json();

      if (result.success) {
        setMaterials(result.data);
        setPagination(result.pagination);
      } else {
        throw new Error('Failed to fetch materials');
      }
    } catch (err) {
      console.error('Error fetching materials:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      setMaterials([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaterials(1);
  }, [searchTerm, selectedFilters]);

  const loadMore = () => {
    if (pagination.page < pagination.pages && !loading) {
      fetchMaterials(pagination.page + 1);
    }
  };

  return {
    materials,
    loading,
    error,
    pagination,
    refetch: () => fetchMaterials(1),
    loadMore,
  };
};
