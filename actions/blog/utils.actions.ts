export const getMockTags = (category: string): string[] => {
  const tagMap: Record<string, string[]> = {
    React: ['#react', '#javascript', '#frontend', '#hooks', '#components'],
    TypeScript: ['#typescript', '#javascript', '#types', '#interface'],
    'Next.js': ['#nextjs', '#react', '#fullstack', '#ssr', '#ssg'],
    JavaScript: ['#javascript', '#es6', '#async', '#promises'],
    'Node.js': ['#nodejs', '#backend', '#javascript', '#api'],
  };
  return tagMap[category] || ['#programming', '#coding'];
};

export const generateTagsFromCategory = (category: string): string[] => {
  return getMockTags(category);
};

export const getCategoryDescription = (category: string): string => {
  const descriptions: Record<string, string> = {
    React: 'Artykuły o React i ekosystemie React',
    TypeScript: 'Wszystko o TypeScript i typowaniu',
    'Next.js': 'Framework React do aplikacji fullstack',
    JavaScript: 'Podstawy i zaawansowane techniki JavaScript',
    'Node.js': 'Backend development z Node.js',
  };
  return descriptions[category] || 'Artykuły programistyczne';
};

export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    React: '#61dafb',
    TypeScript: '#3178c6',
    'Next.js': '#000000',
    JavaScript: '#f7df1e',
    'Node.js': '#339933',
  };
  return colors[category] || '#6b7280';
};

export const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    React: '⚛️',
    TypeScript: '📘',
    'Next.js': '⚡',
    JavaScript: '🟨',
    'Node.js': '🟢',
  };
  return icons[category] || '📄';
};

export const getTagColor = (tag: string): string => {
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
  const index = tag.length % colors.length;
  return colors[index];
};
