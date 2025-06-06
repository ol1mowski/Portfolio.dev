import { NextRequest, NextResponse } from 'next/server';
import { getPosts } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { dbConnect } from '@/db/db_connect';
import { PostsType } from '@/types/PostType.types';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    const limit = parseInt(searchParams.get('limit') || '5');

    if (!query || query.trim().length < 2) {
      return NextResponse.json({ suggestions: [] });
    }

    const postsData = await getPosts();

    if (!postsData || !Array.isArray(postsData) || !postsData.length) {
      return NextResponse.json({ suggestions: [] });
    }

    const firstPost = postsData[0] as { posts: PostsType[] };
    const posts = firstPost.posts;
    const searchTerm = query.toLowerCase().trim();

    const matchingPosts = posts.filter((post: PostsType) => {
      return post.title.toLowerCase().includes(searchTerm);
    });

    const sortedPosts = matchingPosts.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();

      const aStartsWith = aTitle.startsWith(searchTerm);
      const bStartsWith = bTitle.startsWith(searchTerm);

      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;

      return aTitle.length - bTitle.length;
    });

    const suggestions = sortedPosts.slice(0, limit).map(post => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      category: post.category,
    }));

    const categories = [...new Set(posts.map(post => post.category))];
    const matchingCategories = categories
      .filter(category => category.toLowerCase().includes(searchTerm))
      .slice(0, 2)
      .map(category => ({
        id: `category-${category}`,
        title: `Kategoria: ${category}`,
        slug: null,
        category: category,
        type: 'category',
      }));

    return NextResponse.json({
      suggestions: [...suggestions, ...matchingCategories],
    });
  } catch (error) {
    console.error('Suggestions API Error:', error);
    return NextResponse.json({ suggestions: [] });
  }
}
