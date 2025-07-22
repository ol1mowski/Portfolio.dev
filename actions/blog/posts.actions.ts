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
