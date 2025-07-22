'use server';

import { getBlogPosts } from './posts.actions';
import { generateTagsFromCategory, getTagColor } from './utils.actions';

export const getBlogTags = async () => {
  try {
    const posts = await getBlogPosts();
    if (!posts) return { tags: [], stats: { total: 0, trending: 0, popular: 0 } };

    const tagMap = new Map<string, { count: number; categories: Set<string> }>();

    posts.forEach(post => {
      const tags = generateTagsFromCategory(post.category);
      tags.forEach(tag => {
        if (!tagMap.has(tag)) {
          tagMap.set(tag, { count: 0, categories: new Set() });
        }
        const tagData = tagMap.get(tag)!;
        tagData.count += 1;
        tagData.categories.add(post.category);
      });
    });

    const tags = Array.from(tagMap.entries())
      .map(([name, data]) => ({
        name,
        count: data.count,
        slug: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        categories: Array.from(data.categories),
        trending: Math.random() > 0.7,
        popularity: data.count > 3 ? 'high' : data.count > 1 ? 'medium' : 'low',
        color: getTagColor(name),
        relatedPosts: posts.filter(post => generateTagsFromCategory(post.category).includes(name))
          .length,
      }))
      .sort((a, b) => b.count - a.count);

    const stats = {
      total: tags.length,
      trending: tags.filter(tag => tag.trending).length,
      popular: tags.filter(tag => tag.popularity === 'high').length,
    };

    return {
      tags,
      stats,
      trendingTags: tags.filter(tag => tag.trending).slice(0, 10),
      popularTags: tags.filter(tag => tag.popularity === 'high').slice(0, 15),
    };
  } catch (error) {
    console.error('Error fetching blog tags:', error);
    return { tags: [], stats: { total: 0, trending: 0, popular: 0 } };
  }
};
