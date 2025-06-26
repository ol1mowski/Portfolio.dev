'use client';

import s from './page.module.scss';
import Footer from '@/components/pages/Footer/Footer.page';
import Button from '@/components/UI/Button/Button.component';
import Header from '@/components/pages/Header/Header.component';
import { redirect } from 'next/navigation';
import { validateSession } from '@/lib/auth';
import { Params } from '@/types/Params.types';
import { useEffect, useState } from 'react';

type ContentType = {
  description: string;
  buttonText: string;
  downloadPath: string;
  materialSlug: string;
};

const getContentByType = (type: string): ContentType | null => {
  const content: Record<string, ContentType> = {
    note: {
      description: 'Twoja notatka jest dostępna do pobrania poniżej',
      buttonText: 'Pobierz notatkę',
      downloadPath: '/Notatka_JavaScript.pdf',
      materialSlug: 'JavaScript',
    },
    ebook: {
      description: 'Twój E-Book jest dostępny do pobrania poniżej',
      buttonText: 'Pobierz E-Book',
      downloadPath:
        '/Praktyczne_Porady_Na_Co_Zwrócić_Uwagę_Podczas_Projektowania_Strony_Internetowej.pdf',
      materialSlug:
        'Praktyczne_Porady_Na_Co_Zwrocic_Uwage_Podczas_Projektowania_Strony_Internetowej',
    },
  };

  return content[type] || null;
};

const increaseDownloadCount = async (materialSlug: string) => {
  try {
    const materialResponse = await fetch(`/api/materials/${materialSlug}`);
    if (!materialResponse.ok) {
      console.error('Failed to fetch material');
      return;
    }

    const materialData = await materialResponse.json();
    if (!materialData.success || !materialData.data) {
      console.error('Material not found');
      return;
    }

    const updateResponse = await fetch('/api/materials', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ materialId: materialData.data.id }),
    });

    if (!updateResponse.ok) {
      console.error('Failed to update download count');
    }
  } catch (error) {
    console.error('Error updating download count:', error);
  }
};

export default function Page({ params }: { params: Params }) {
  useEffect(() => {
    const loadPage = async () => {
      try {
        const { id } = await params;
        const contentType = id.toLowerCase();
        const content = getContentByType(contentType);

        if (content) {
          await increaseDownloadCount(content.materialSlug);
        }
      } catch (error) {
        console.error('Error in Thanks page:', error);
      }
    };

    loadPage();
  }, [params]);

  const [content, setContent] = useState<ContentType | null>(null);
  const [userName, setUserName] = useState('za pobranie');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializePage = async () => {
      try {
        const { id } = await params;
        const contentType = id.toLowerCase();
        const pageContent = getContentByType(contentType);

        if (!pageContent) {
          redirect('/404');
        }

        setContent(pageContent);

        try {
          const { session } = await validateSession();
          if (session?.name) {
            setUserName(session.name);
          }
        } catch (error) {
          console.log('No session available, using default name', error);
        }
      } catch (error) {
        console.error('Error in Thanks page:', error);
      } finally {
        setLoading(false);
      }
    };

    initializePage();
  }, [params]);

  if (loading) {
    return (
      <>
        <Header />
        <section className={s.container}>
          <h1 className={s.container__header}>Ładowanie...</h1>
        </section>
        <Footer />
      </>
    );
  }

  if (!content) {
    return (
      <>
        <Header />
        <section className={s.container}>
          <h1 className={s.container__header}>Błąd</h1>
          <p className={s.container__text}>Nie udało się załadować strony</p>
        </section>
        <Footer />
      </>
    );
  }

  const { description, buttonText, downloadPath } = content;

  return (
    <>
      <Header />
      <section className={s.container}>
        <h1 className={s.container__header}>Dziękuję {userName}!</h1>
        <p className={s.container__text}>{description}</p>
        <a href={downloadPath} download>
          <Button type="normal" value={buttonText} />
        </a>
      </section>
      <Footer />
    </>
  );
}
