import { NextResponse } from 'next/server';
import { getPosts } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { dbConnect } from '@/db/db_connect';
import { PostsType } from '@/types/PostType.types';

export async function GET() {
  try {
    await dbConnect();

    const postsData = await getPosts();

    if (!postsData || !Array.isArray(postsData) || !postsData.length) {
      return NextResponse.json([]);
    }

    const firstPost = postsData[0] as { posts: PostsType[] };
    const posts = firstPost.posts;

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

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Categories API Error:', error);
    return NextResponse.json({ error: 'Nie udało się pobrać kategorii' }, { status: 500 });
  }
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    React: 'Biblioteka JavaScript do budowania interfejsów użytkownika',
    TypeScript: 'Nadzbiór JavaScript z statycznym typowaniem',
    'Next.js': 'Framework React do aplikacji full-stack',
    'Node.js': 'Środowisko uruchomieniowe JavaScript po stronie serwera',
    Docker: 'Platforma do konteneryzacji aplikacji',
    CSS: 'Język stylów do projektowania stron internetowych',
    'Vue.js': 'Progresywny framework JavaScript',
    Angular: 'Platforma do budowania aplikacji webowych',
    PHP: 'Język programowania do rozwoju aplikacji webowych',
    Python: 'Wszechstronny język programowania',
  };

  return descriptions[category] || 'Artykuły z kategorii ' + category;
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    React: '#61DAFB',
    TypeScript: '#3178C6',
    'Next.js': '#000000',
    'Node.js': '#339933',
    Docker: '#2496ED',
    CSS: '#1572B6',
    'Vue.js': '#4FC08D',
    Angular: '#DD0031',
    PHP: '#777BB4',
    Python: '#3776AB',
  };

  return colors[category] || '#6B7280';
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    React: '⚛️',
    TypeScript: '📘',
    'Next.js': '🚀',
    'Node.js': '🟢',
    Docker: '🐳',
    CSS: '🎨',
    'Vue.js': '💚',
    Angular: '🅰️',
    PHP: '🐘',
    Python: '🐍',
  };

  return icons[category] || '📝';
}
