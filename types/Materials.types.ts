export interface MaterialType {
  id: string;
  title: string;
  image: string;
  slug: string;
  type: 'ebook' | 'note';
  category: string;
  categoryType: 'techniczne' | 'rozwojowe';
  tags: string[];
  description: string;
  downloadCount: number;
  size: string;
  format: string;
  publishDate: string;
  isPremium: boolean;
}

export interface FilterOptions {
  type: string[];
  category: string[];
  categoryType: string[];
  tags: string[];
}

export interface SearchFilters {
  searchTerm: string;
  selectedFilters: FilterOptions;
}
