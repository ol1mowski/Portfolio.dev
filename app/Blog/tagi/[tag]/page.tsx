import { Suspense } from 'react';
import TagPage from '@/components/pages/Blog/TagPage/TagPage.page';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export default async function Tag({ params }: TagPageProps) {
  const { tag } = await params;

  return (
    <Suspense fallback={<div>Ładowanie tagów...</div>}>
      <TagPage tag={decodeURIComponent(tag)} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  // Podstawowe tagi - później można pobrać z API
  return [
    { tag: 'React' },
    { tag: 'JavaScript' },
    { tag: 'TypeScript' },
    { tag: 'Frontend' },
    { tag: 'Backend' },
    { tag: 'Development' },
    { tag: 'Programming' },
    { tag: 'NextJS' },
    { tag: 'NodeJS' },
    { tag: 'Docker' },
    { tag: 'DevOps' },
    { tag: 'CSS' },
  ];
}
