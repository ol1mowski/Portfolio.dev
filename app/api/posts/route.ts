import { NextRequest, NextResponse } from 'next/server';
import { getFilteredPosts } from '@/actions/blog';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    const result = await getFilteredPosts({
      category: category || undefined,
      tag: tag || undefined,
      limit,
      offset,
    });

    if (!result) {
      return NextResponse.json({
        posts: [],
        total: 0,
        hasMore: false,
        filters: { category, tag },
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Posts API Error:', error);
    return NextResponse.json({
      posts: [],
      total: 0,
      hasMore: false,
      error: 'Failed to fetch posts',
    });
  }
}
