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
        trending: Math.random() > 0.7, // Symulowane
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

    return NextResponse.json({
      tags,
      stats,
      trendingTags: tags.filter(tag => tag.trending).slice(0, 10),
      popularTags: tags.filter(tag => tag.popularity === 'high').slice(0, 15),
    });
  } catch (error) {
    console.error('Tags API Error:', error);
    return NextResponse.json({ error: 'Nie udało się pobrać tagów' }, { status: 500 });
  }
}

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

function getTagColor(tag: string): string {
  const colors: Record<string, string> = {
    React: '#61DAFB',
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    Frontend: '#FF6B6B',
    Backend: '#4ECDC4',
    Framework: '#45B7D1',
    API: '#96CEB4',
    DevOps: '#FFEAA7',
    Database: '#DDA0DD',
    Mobile: '#FD79A8',
  };

  for (const [key, color] of Object.entries(colors)) {
    if (tag.toLowerCase().includes(key.toLowerCase())) {
      return color;
    }
  }

  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 70%, 60%)`;
}
