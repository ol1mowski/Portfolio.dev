import { NextRequest, NextResponse } from 'next/server';
import { searchPosts } from '@/actions/blog.actions';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    if (!query || query.trim().length === 0) {
      return NextResponse.json({
        results: [],
        total: 0,
        message: 'Zapytanie nie może być puste',
      });
    }

    const searchResult = await searchPosts(query);

    if (!searchResult) {
      return NextResponse.json({
        results: [],
        total: 0,
        message: 'Błąd podczas wyszukiwania',
      });
    }

    return NextResponse.json(searchResult);
  } catch (error) {
    console.error('Search API Error:', error);
    return NextResponse.json({ message: 'Błąd wewnętrzny serwera' }, { status: 500 });
  }
}
