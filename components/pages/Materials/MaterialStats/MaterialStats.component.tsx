import s from './MaterialStats.component.module.scss';

import { memo, useMemo } from 'react';
import { MaterialType } from '@/types/Materials.types';

interface MaterialStatsProps {
  materials: MaterialType[];
}

const MaterialStats = memo(({ materials }: MaterialStatsProps) => {
  const stats = useMemo(() => {
    const totalDownloads = materials.reduce((sum, material) => sum + material.downloadCount, 0);
    const totalEbooks = materials.filter(m => m.type === 'ebook').length;
    const totalNotes = materials.filter(m => m.type === 'note').length;
    const totalMaterials = materials.filter(m => m.type === 'material').length;
    const premiumCount = materials.filter(m => m.isPremium).length;

    return {
      total: materials.length,
      downloads: totalDownloads,
      ebooks: totalEbooks,
      notes: totalNotes,
      materials: totalMaterials,
      premium: premiumCount,
      free: materials.length - premiumCount,
    };
  }, [materials]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div className={s.materialStats}>
      <div className={s.statsGrid}>
        <div className={s.statItem}>
          <div className={s.statNumber}>{stats.total}</div>
          <div className={s.statLabel}>Materiałów</div>
        </div>

        <div className={s.statItem}>
          <div className={s.statNumber}>{formatNumber(stats.downloads)}</div>
          <div className={s.statLabel}>Pobrań</div>
        </div>

        <div className={s.statItem}>
          <div className={s.statNumber}>{stats.ebooks}</div>
          <div className={s.statLabel}>E-booków</div>
        </div>

        <div className={s.statItem}>
          <div className={s.statNumber}>{stats.notes}</div>
          <div className={s.statLabel}>Notatek</div>
        </div>

        <div className={s.statItem}>
          <div className={s.statNumber}>{stats.free}</div>
          <div className={s.statLabel}>Darmowych</div>
        </div>

        <div className={s.statItem}>
          <div className={s.statNumber}>{stats.premium}</div>
          <div className={s.statLabel}>Premium</div>
        </div>
      </div>
    </div>
  );
});

MaterialStats.displayName = 'MaterialStats';

export default MaterialStats;
