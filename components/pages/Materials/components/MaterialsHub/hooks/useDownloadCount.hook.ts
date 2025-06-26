import { useState, useCallback } from 'react';

interface UseDownloadCountProps {
  initialMaterials: any[];
}

export const useDownloadCount = ({ initialMaterials }: UseDownloadCountProps) => {
  const [materials, setMaterials] = useState(initialMaterials);

  const updateDownloadCount = useCallback(async (materialId: string) => {
    setMaterials(prevMaterials =>
      prevMaterials.map(material =>
        material.id === materialId
          ? { ...material, downloadCount: material.downloadCount + 1 }
          : material
      )
    );

    try {
      const response = await fetch('/api/materials', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ materialId }),
      });

      if (!response.ok) {
        console.error('Failed to update download count');
        setMaterials(prevMaterials =>
          prevMaterials.map(material =>
            material.id === materialId
              ? { ...material, downloadCount: material.downloadCount - 1 }
              : material
          )
        );
      }
    } catch (error) {
      console.error('Error updating download count:', error);
      setMaterials(prevMaterials =>
        prevMaterials.map(material =>
          material.id === materialId
            ? { ...material, downloadCount: material.downloadCount - 1 }
            : material
        )
      );
    }
  }, []);

  const updateMaterials = useCallback((newMaterials: any[]) => {
    setMaterials(newMaterials);
  }, []);

  return {
    materials,
    updateDownloadCount,
    updateMaterials,
  };
};
