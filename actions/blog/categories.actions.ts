'use server';

import { getBlogPosts } from './posts.actions';
import { getCategoryDescription, getCategoryColor, getCategoryIcon } from './utils.actions';

export const getBlogCategories = async () => {
  try {
    const posts = await getBlogPosts();
    if (!posts) return [];

    const categoryMap = new Map<string, number>();

    posts.forEach(post => {
      const category = post.category;
      categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
    });

    const categories = Array.from(categoryMap.entries())
      .map(([name, count]) => ({
        name,
        count,
        slug: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        description: getCategoryDescription(name),
        color: getCategoryColor(name),
        icon: getCategoryIcon(name),
        percentage: Math.round((count / posts.length) * 100),
      }))
      .sort((a, b) => b.count - a.count);

    return categories;
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    return [];
  }
};
