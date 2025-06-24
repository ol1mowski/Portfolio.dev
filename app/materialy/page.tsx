import { Metadata } from 'next';
import MaterialsHub from '@/components/pages/Materials/MaterialsHub/MaterialsHub.component';
import { MATERIALS } from '@/data/Materials.data';

export const metadata: Metadata = {
  title: 'Centrum Materiałów | Notatki, E-booki i Zasoby Edukacyjne',
  description:
    'Odkryj najlepsze materiały edukacyjne - e-booki, notatki i zasoby dodatkowe. Wszystko w jednym miejscu, z zaawansowanym filtrowaniem. Darmowe i premium materiały dla programistów.',
  keywords:
    'materiały edukacyjne, e-booki, notatki, programowanie, JavaScript, React, CSS, frontend, backend',
  openGraph: {
    title: 'Centrum Materiałów | Materiały Edukacyjne dla Programistów',
    description:
      'Najlepsze materiały edukacyjne w jednym miejscu - e-booki, notatki, przewodniki. Zaawansowane filtrowanie i wyszukiwanie.',
    type: 'website',
  },
};

export default function MaterialsPage() {
  return <MaterialsHub initialMaterials={MATERIALS} />;
}
