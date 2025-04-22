import s from './ResourcesPage.component.module.scss';

import { memo } from 'react';
import dynamic from 'next/dynamic';

import Header from '@/components/pages/Header/Header.component';
import Footer from '@/components/pages/Footer/Footer.page';

const DynamicNoteCard = dynamic(
  () => import('@/components/pages/Notes/NoteCard/NoteCard.component'),
  {
    loading: () => <p>Ładowanie...</p>,
  }
);

interface ResourcesPageProps {
  title: string;
  resources: Array<{
    id: number;
    title: string;
    image: string;
    slug: string;
  }>;
  type: 'ebook' | 'note';
}

const ResourcesPage = memo(({ title, resources, type }: ResourcesPageProps) => {
  return (
    <>
      <Header />
      <main
        className={s.container}
        aria-label={`Strona z ${type === 'ebook' ? 'ebookami' : 'notatkami'}`}
      >
        <h1 className={s.container__header}>{title}</h1>
        <section
          className={s.resourcesGrid}
          aria-label={`Lista ${type === 'ebook' ? 'ebooków' : 'notatek'}`}
        >
          {resources.map(resource => (
            <DynamicNoteCard key={resource.id} {...resource} type={type} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
});

ResourcesPage.displayName = 'ResourcesPage';

export default ResourcesPage;
