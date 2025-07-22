'use server';

import { dbConnect } from '@/db/db_connect';
import Posts from '@/db/Schemas/Posts';
import { PostsType } from '@/types/PostType.types';

export const getBlogPosts = async (): Promise<PostsType[] | null> => {
  try {
    await dbConnect();
    const data = await (Posts as any).find().lean().exec();

    if (!data || !Array.isArray(data) || !data.length) {
      return null;
    }

    const firstItem = data[0] as { posts: PostsType[] };
    return firstItem.posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return null;
  }
};

export const getFilteredPosts = async (params: {
  category?: string;
  tag?: string;
  limit?: number;
  offset?: number;
}): Promise<{
  posts: PostsType[];
  total: number;
  hasMore: boolean;
  filters: { category: string | null; tag: string | null };
} | null> => {
  try {
    const { category, tag, limit = 10, offset = 0 } = params;
    const posts = await getBlogPosts();

    if (!posts) {
      return {
        posts: [],
        total: 0,
        hasMore: false,
        filters: { category: category || null, tag: tag || null },
      };
    }

    let filteredPosts = [...posts];

    if (category) {
      filteredPosts = filteredPosts.filter(
        post => post.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (tag) {
      filteredPosts = filteredPosts.filter(post => {
        const mockTags = getMockTags(post.category);
        return mockTags.some(mockTag =>
          mockTag.toLowerCase().includes(tag.toLowerCase().replace('#', ''))
        );
      });
    }

    const total = filteredPosts.length;
    const paginatedPosts = filteredPosts.slice(offset, offset + limit);
    const hasMore = offset + limit < total;

    return {
      posts: paginatedPosts,
      total,
      hasMore,
      filters: { category: category || null, tag: tag || null },
    };
  } catch (error) {
    console.error('Error fetching filtered posts:', error);
    return null;
  }
};

export const getPostBySlug = async (slug: string): Promise<PostsType | null> => {
  try {
    const posts = await getBlogPosts();
    if (!posts) return null;

    const post = posts.find(p => p.slug === slug);
    return post || null;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
};

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

export const searchPosts = async (query: string) => {
  try {
    const posts = await getBlogPosts();
    if (!posts) return { results: [], total: 0, query, message: 'Brak postów do wyszukania' };

    const searchTerm = query.toLowerCase();
    const results = posts.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(searchTerm);
      const descriptionMatch = post.description.toLowerCase().includes(searchTerm);
      const categoryMatch = post.category.toLowerCase().includes(searchTerm);
      const authorMatch = post.author.toLowerCase().includes(searchTerm);

      return titleMatch || descriptionMatch || categoryMatch || authorMatch;
    });

    return {
      results,
      total: results.length,
      query,
      message:
        results.length > 0
          ? `Znaleziono ${results.length} wyników dla "${query}"`
          : `Brak wyników dla "${query}"`,
    };
  } catch (error) {
    console.error('Error searching posts:', error);
    return { results: [], total: 0, query, message: 'Błąd podczas wyszukiwania' };
  }
};

export const getSearchSuggestions = async (query: string, limit: number = 5) => {
  try {
    const posts = await getBlogPosts();
    if (!posts) return { suggestions: [] };

    const searchTerm = query.toLowerCase();
    const suggestions = [];

    const matchingPosts = posts
      .filter(
        post =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.category.toLowerCase().includes(searchTerm)
      )
      .slice(0, limit)
      .map(post => ({
        id: post.id.toString(),
        title: post.title,
        slug: post.slug,
        category: post.category,
        type: 'post' as const,
      }));

    suggestions.push(...matchingPosts);

    const uniqueCategories = [...new Set(posts.map(post => post.category))];
    const matchingCategories = uniqueCategories
      .filter(category => category.toLowerCase().includes(searchTerm))
      .slice(0, 2)
      .map(category => ({
        id: `category-${category}`,
        title: `Kategoria: ${category}`,
        slug: null,
        category,
        type: 'category' as const,
      }));

    suggestions.push(...matchingCategories);

    return { suggestions: suggestions.slice(0, limit) };
  } catch (error) {
    console.error('Error fetching search suggestions:', error);
    return { suggestions: [] };
  }
};

const getMockTags = (category: string): string[] => {
  const tagMap: Record<string, string[]> = {
    React: ['#react', '#javascript', '#frontend', '#hooks', '#components'],
    TypeScript: ['#typescript', '#javascript', '#types', '#interface'],
    'Next.js': ['#nextjs', '#react', '#fullstack', '#ssr', '#ssg'],
    JavaScript: ['#javascript', '#es6', '#async', '#promises'],
    'Node.js': ['#nodejs', '#backend', '#javascript', '#api'],
  };
  return tagMap[category] || ['#programming', '#coding'];
};

const generateTagsFromCategory = (category: string): string[] => {
  return getMockTags(category);
};

const getCategoryDescription = (category: string): string => {
  const descriptions: Record<string, string> = {
    React: 'Artykuły o React i ekosystemie React',
    TypeScript: 'Wszystko o TypeScript i typowaniu',
    'Next.js': 'Framework React do aplikacji fullstack',
    JavaScript: 'Podstawy i zaawansowane techniki JavaScript',
    'Node.js': 'Backend development z Node.js',
  };
  return descriptions[category] || 'Artykuły programistyczne';
};

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    React: '#61dafb',
    TypeScript: '#3178c6',
    'Next.js': '#000000',
    JavaScript: '#f7df1e',
    'Node.js': '#339933',
  };
  return colors[category] || '#6b7280';
};

const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    React: '⚛️',
    TypeScript: '📘',
    'Next.js': '⚡',
    JavaScript: '🟨',
    'Node.js': '🟢',
  };
  return icons[category] || '📄';
};

const getTagColor = (tag: string): string => {
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
  const index = tag.length % colors.length;
  return colors[index];
};
