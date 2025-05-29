import { NextRequest, NextResponse } from 'next/server';
import { getPosts } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { dbConnect } from '@/db/db_connect';
import { PostsType } from '@/types/PostType.types';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    const postsData = await getPosts();

    if (!postsData || !Array.isArray(postsData) || !postsData.length) {
      return NextResponse.json({
        posts: [],
        total: 0,
        hasMore: false,
        filters: { category, tag },
      });
    }

    let posts = postsData[0].posts as PostsType[];

    // Filtrowanie po kategorii
    if (category) {
      posts = posts.filter(
        (post: PostsType) => post.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filtrowanie po tagu (dodamy logikę gdy będą tagi w bazie)
    if (tag) {
      posts = posts.filter((post: PostsType) => {
        // Mock tagów na podstawie kategorii (później zastąpić prawdziwymi tagami)
        const mockTags = getMockTags(post.category);
        return mockTags.some(mockTag =>
          mockTag.toLowerCase().includes(tag.toLowerCase().replace('#', ''))
        );
      });
    }

    const total = posts.length;
    const paginatedPosts = posts.slice(offset, offset + limit);
    const hasMore = offset + limit < total;

    return NextResponse.json({
      posts: paginatedPosts,
      total,
      hasMore,
      filters: { category, tag },
    });
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

// Funkcja pomocnicza do mock tagów (później usunąć gdy będą prawdziwe tagi)
function getMockTags(category: string): string[] {
  switch (category.toLowerCase()) {
    case 'react':
      return ['React', 'JavaScript', 'Frontend', 'Hooks', 'Components'];
    case 'typescript':
      return ['TypeScript', 'JavaScript', 'Development', 'Types', 'Interface'];
    case 'next.js':
      return ['NextJS', 'React', 'SSR', 'Framework', 'Vercel'];
    case 'node.js':
      return ['NodeJS', 'Backend', 'API', 'Express', 'JavaScript'];
    case 'docker':
      return ['Docker', 'DevOps', 'Deployment', 'Container', 'Infrastructure'];
    case 'css':
      return ['CSS', 'Styling', 'Frontend', 'Responsive', 'Animation'];
    default:
      return ['JavaScript', 'Development', 'Programming', 'Web'];
  }
}
