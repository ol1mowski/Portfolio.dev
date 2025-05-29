import { Suspense } from 'react';
import CategoryPage from '@/components/pages/Blog/CategoryPage/CategoryPage.page';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function Category({ params }: CategoryPageProps) {
  const { category } = params;

  return (
    <Suspense fallback={<div>Ładowanie kategorii...</div>}>
      <CategoryPage category={decodeURIComponent(category)} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  // Podstawowe kategorie - później można pobrać z API
  return [
    { category: 'React' },
    { category: 'TypeScript' },
    { category: 'Next.js' },
    { category: 'Node.js' },
    { category: 'Docker' },
    { category: 'CSS' },
    { category: 'DevOps' },
  ];
}
