'use client';

import s from './FilterPanel.component.module.scss';

import { memo, useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FilterOptions } from '@/types/Materials.types';
import { CATEGORIES, CATEGORY_TYPES, MATERIAL_TYPES } from '@/data/Materials.data';

interface FilterPanelProps {
  selectedFilters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onClearAll: () => void;
}

const FilterPanel = memo(({ selectedFilters, onFilterChange, onClearAll }: FilterPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const filterPanelRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('materials.filters');

  // Obsługa kliknięć poza komponentem
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterPanelRef.current && !filterPanelRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  const handleFilterToggle = (filterType: keyof FilterOptions, value: string) => {
    const currentFilters = selectedFilters[filterType];
    const newFilters = currentFilters.includes(value)
      ? currentFilters.filter(item => item !== value)
      : [...currentFilters, value];

    onFilterChange({
      ...selectedFilters,
      [filterType]: newFilters,
    });
  };

  const getActiveFiltersCount = () => {
    return Object.values(selectedFilters).reduce((acc, filters) => acc + filters.length, 0);
  };

  const activeCount = getActiveFiltersCount();

  return (
    <div className={s.filterPanel} ref={filterPanelRef}>
      <button
        className={s.filterToggle}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? t('collapse') : t('expand')}`}
      >
        <span className={s.filterIcon}>⚙️</span>
        <span>{t('toggle')}</span>
        {activeCount > 0 && <span className={s.activeCount}>{activeCount}</span>}
        <span className={`${s.chevron} ${isExpanded ? s.expanded : ''}`}>▼</span>
      </button>

      {isExpanded && (
        <div className={s.filterContent}>
          <div className={s.filterHeader}>
            <h3>{t('title')}</h3>
            {activeCount > 0 && (
              <button onClick={onClearAll} className={s.clearAll}>
                <span>{t('clearAll')}</span>
              </button>
            )}
          </div>

          <div className={s.filterGroups}>
            <div className={s.filterGroup}>
              <h4 className={s.filterGroupTitle}>{t('materialType')}</h4>
              <div className={s.filterOptions}>
                {MATERIAL_TYPES.map(type => (
                  <label key={type} className={s.filterOption}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.type.includes(type)}
                      onChange={() => handleFilterToggle('type', type)}
                      className={s.filterCheckbox}
                    />
                    <span className={s.filterLabel}>{t(`typeLabels.${type}`)}</span>
                    <span className={s.filterCheckmark}>✓</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={s.filterGroup}>
              <h4 className={s.filterGroupTitle}>{t('category')}</h4>
              <div className={s.filterOptions}>
                {CATEGORIES.map(category => (
                  <label key={category} className={s.filterOption}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.category.includes(category)}
                      onChange={() => handleFilterToggle('category', category)}
                      className={s.filterCheckbox}
                    />
                    <span className={s.filterLabel}>{category}</span>
                    <span className={s.filterCheckmark}>✓</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={s.filterGroup}>
              <h4 className={s.filterGroupTitle}>{t('categoryType')}</h4>
              <div className={s.filterOptions}>
                {CATEGORY_TYPES.map(categoryType => (
                  <label key={categoryType} className={s.filterOption}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.categoryType.includes(categoryType)}
                      onChange={() => handleFilterToggle('categoryType', categoryType)}
                      className={s.filterCheckbox}
                    />
                    <span className={s.filterLabel}>{t(`categoryTypeLabels.${categoryType}`)}</span>
                    <span className={s.filterCheckmark}>✓</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

FilterPanel.displayName = 'FilterPanel';

export default FilterPanel;
