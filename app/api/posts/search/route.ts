import { NextRequest, NextResponse } from 'next/server';
import { getPosts } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { dbConnect } from '@/db/db_connect';
import { PostsType } from '@/types/PostType.types';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    if (!query || query.trim().length === 0) {
      return NextResponse.json({
        results: [],
        total: 0,
        message: 'Zapytanie nie może być puste',
      });
    }

    const postsData = await getPosts();

    if (!postsData || !Array.isArray(postsData) || !postsData.length) {
      return NextResponse.json({
        results: [],
        total: 0,
        message: 'Brak danych',
      });
    }

    const posts = postsData[0].posts as PostsType[];
    const searchTerm = query.toLowerCase().trim();

    // Wyszukiwanie w tytule, opisie i kategorii
    const filteredPosts = posts.filter((post: PostsType) => {
      const titleMatch = post.title.toLowerCase().includes(searchTerm);
      const descriptionMatch = post.description.toLowerCase().includes(searchTerm);
      const categoryMatch = post.category.toLowerCase().includes(searchTerm);
      const authorMatch = post.author.toLowerCase().includes(searchTerm);

      return titleMatch || descriptionMatch || categoryMatch || authorMatch;
    });

    // Sortowanie wyników - najpierw dokładne dopasowania w tytule
    const sortedResults = filteredPosts.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      const aExactMatch = aTitle.includes(searchTerm);
      const bExactMatch = bTitle.includes(searchTerm);

      if (aExactMatch && !bExactMatch) return -1;
      if (!aExactMatch && bExactMatch) return 1;

      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return NextResponse.json({
      results: sortedResults,
      total: sortedResults.length,
      query: query,
      message:
        sortedResults.length > 0
          ? `Znaleziono ${sortedResults.length} artykułów`
          : 'Nie znaleziono żadnych artykułów',
    });
  } catch (error) {
    console.error('Search API Error:', error);
    return NextResponse.json({ message: 'Błąd wewnętrzny serwera' }, { status: 500 });
  }
}
