import { NextResponse } from 'next/server';
import { getPosts } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { dbConnect } from '@/db/db_connect';
import { PostsType } from '@/types/PostType.types';

export async function GET() {
  try {
    await dbConnect();

    const postsData = await getPosts();

    if (!postsData || !Array.isArray(postsData) || !postsData.length) {
      return NextResponse.json({
        articles: 0,
        categories: 0,
        tags: 0,
        totalViews: 0,
        authors: 0,
        avgReadTime: 0,
      });
    }

    const posts = postsData[0].posts as PostsType[];

    // Obliczanie statystyk
    const totalArticles = posts.length;

    // Unikalne kategorie
    const uniqueCategories = [...new Set(posts.map(post => post.category))];
    const totalCategories = uniqueCategories.length;

    // Generowanie tagów na podstawie kategorii (tymczasowo)
    const allTags = posts.flatMap(post => generateTagsFromCategory(post.category));
    const uniqueTags = [...new Set(allTags)];
    const totalTags = uniqueTags.length;

    // Unikalni autorzy
    const uniqueAuthors = [...new Set(posts.map(post => post.author))];
    const totalAuthors = uniqueAuthors.length;

    // Średni czas czytania
    const avgReadTime = posts.reduce((sum, post) => sum + (post.readTime || 5), 0) / posts.length;

    // Symulowane wyświetlenia (w prawdziwej aplikacji pobierałbyś z analytics)
    const totalViews = posts.length * Math.floor(Math.random() * 100) + 1000;

    // Statystyki wzrostu (symulowane)
    const monthlyGrowth = {
      articles: '+23%',
      views: '+45%',
      readers: '+67%',
    };

    // Top kategorie z liczbą postów
    const categoryStats = uniqueCategories
      .map(category => ({
        name: category,
        count: posts.filter(post => post.category === category).length,
        percentage: Math.round(
          (posts.filter(post => post.category === category).length / totalArticles) * 100
        ),
      }))
      .sort((a, b) => b.count - a.count);

    // Top tagi z popularnością
    const tagStats = uniqueTags
      .map(tag => ({
        name: tag,
        count: Math.floor(Math.random() * 50) + 5, // Symulowane
        trending: Math.random() > 0.7,
      }))
      .sort((a, b) => b.count - a.count);

    return NextResponse.json({
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
      tags: tagStats.slice(0, 20), // Top 20 tagów
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
    });
  } catch (error) {
    console.error('Blog Stats API Error:', error);
    return NextResponse.json({ error: 'Nie udało się pobrać statystyk bloga' }, { status: 500 });
  }
}

// Funkcja pomocnicza do generowania tagów z kategorii
function generateTagsFromCategory(category: string): string[] {
  const categoryToTags: Record<string, string[]> = {
    React: ['React', 'JavaScript', 'Frontend', 'Hooks', 'Components', 'State Management', 'JSX'],
    TypeScript: ['TypeScript', 'JavaScript', 'Types', 'Interface', 'Development', 'Static Typing'],
    'Next.js': ['NextJS', 'React', 'SSR', 'Framework', 'Vercel', 'Full-Stack', 'API Routes'],
    'Node.js': ['NodeJS', 'Backend', 'API', 'Express', 'JavaScript', 'Server', 'NPM'],
    Docker: ['Docker', 'DevOps', 'Deployment', 'Container', 'Infrastructure', 'Kubernetes'],
    CSS: ['CSS', 'Styling', 'Frontend', 'Responsive', 'Animation', 'Flexbox', 'Grid'],
    'Vue.js': ['Vue', 'JavaScript', 'Frontend', 'Framework', 'Components', 'Reactive'],
    Angular: ['Angular', 'TypeScript', 'Frontend', 'Framework', 'Components', 'RxJS'],
    PHP: ['PHP', 'Backend', 'Laravel', 'Symfony', 'Web Development', 'Server-Side'],
    Python: ['Python', 'Django', 'Flask', 'Backend', 'Data Science', 'AI', 'Machine Learning'],
  };

  return categoryToTags[category] || ['Programming', 'Web Development', 'Technology'];
}
