import s from './page.module.scss';
import Footer from '@/components/pages/Footer/Footer.page';
import Button from '@/components/UI/Button/Button.component';
import Header from '@/components/pages/Header/Header.component';
import { redirect } from 'next/navigation';
import { validateSession } from '@/lib/auth';
import { Params } from '@/types/Params.types';

type ContentType = {
  description: string;
  buttonText: string;
  downloadPath: string;
};

const getContentByType = (type: string): ContentType | null => {
  const content: Record<string, ContentType> = {
    note: {
      description: 'Twoja notatka jest dostępna do pobrania poniżej',
      buttonText: 'Pobierz notatkę',
      downloadPath: '/Notatka_JavaScript.pdf',
    },
    ebook: {
      description: 'Twój E-Book jest dostępny do pobrania poniżej',
      buttonText: 'Pobierz E-Book',
      downloadPath:
        '/Praktyczne_Porady_Na_Co_Zwrócić_Uwagę_Podczas_Projektowania_Strony_Internetowej.pdf',
    },
  };

  return content[type] || null;
};

export default async function Page({ params }: { params: Params }) {
  try {
    const { id } = await params;

    const contentType = id.toLowerCase();
    const content = getContentByType(contentType);

    if (!content) {
      redirect('/404');
    }

    const { description, buttonText, downloadPath } = content;

    // Próbuj pobrać sesję, ale nie wymagaj jej
    let userName = 'za pobranie';
    try {
      const { session } = await validateSession();
      if (session?.name) {
        userName = session.name;
      }
    } catch (error) {
      console.log('No session available, using default name');
    }

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
  } catch (error) {
    console.error('Error in Thanks page:', error);

    // Fallback content
    return (
      <>
        <Header />
        <section className={s.container}>
          <h1 className={s.container__header}>Dziękuję!</h1>
          <p className={s.container__text}>Twój E-Book jest dostępny do pobrania poniżej</p>
          <a
            href="/Praktyczne_Porady_Na_Co_Zwrócić_Uwagę_Podczas_Projektowania_Strony_Internetowej.pdf"
            download
          >
            <Button type="normal" value="Pobierz E-Book" />
          </a>
        </section>
        <Footer />
      </>
    );
  }
}
