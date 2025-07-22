'use server';

import { getBlogPosts } from './posts.actions';
import { generateTagsFromCategory } from './utils.actions';

export const getBlogStats = async () => {
  try {
    const posts = await getBlogPosts();
    if (!posts) {
      return {
        general: {
          articles: 0,
          categories: 0,
          tags: 0,
          totalViews: 0,
          authors: 0,
          avgReadTime: 0,
        },
        growth: {
          articles: '+0%',
          views: '+0%',
          readers: '+0%',
        },
        categories: [],
        tags: [],
        recentActivity: {
          lastPostDate: new Date().toISOString(),
          postsThisMonth: 0,
        },
      };
    }

    const totalArticles = posts.length;
    const uniqueCategories = [...new Set(posts.map(post => post.category))];
    const totalCategories = uniqueCategories.length;

    const allTags = posts.flatMap(post => generateTagsFromCategory(post.category));
    const uniqueTags = [...new Set(allTags)];
    const totalTags = uniqueTags.length;

    const uniqueAuthors = [...new Set(posts.map(post => post.author))];
    const totalAuthors = uniqueAuthors.length;

    const avgReadTime = posts.reduce((sum, post) => sum + (post.readTime || 5), 0) / posts.length;
    const totalViews = posts.length * Math.floor(Math.random() * 100) + 1000;

    const monthlyGrowth = {
      articles: '+23%',
      views: '+45%',
      readers: '+67%',
    };

    const categoryStats = uniqueCategories
      .map(category => ({
        name: category,
        count: posts.filter(post => post.category === category).length,
        percentage: Math.round(
          (posts.filter(post => post.category === category).length / totalArticles) * 100
        ),
      }))
      .sort((a, b) => b.count - a.count);

    const tagStats = uniqueTags
      .map(tag => ({
        name: tag,
        count: Math.floor(Math.random() * 50) + 5,
        trending: Math.random() > 0.7,
      }))
      .sort((a, b) => b.count - a.count);

    return {
      general: {
        articles: totalArticles,
        categories: totalCategories,
        tags: totalTags,
        authors: totalAuthors,
        totalViews,
        avgReadTime: Math.round(avgReadTime),
      },
      growth: monthlyGrowth,
      categories: categoryStats,
      tags: tagStats.slice(0, 20),
      recentActivity: {
        lastPostDate: posts[0]?.date || new Date().toISOString(),
        postsThisMonth: posts.filter(post => {
          const postDate = new Date(post.date);
          const thisMonth = new Date();
          return (
            postDate.getMonth() === thisMonth.getMonth() &&
            postDate.getFullYear() === thisMonth.getFullYear()
          );
        }).length,
      },
    };
  } catch (error) {
    console.error('Error fetching blog stats:', error);
    return null;
  }
};
