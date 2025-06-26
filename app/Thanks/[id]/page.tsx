import s from './page.module.scss';
import Footer from '@/components/pages/Footer/Footer.page';
import Button from '@/components/UI/Button/Button.component';
import Header from '@/components/pages/Header/Header.component';
import { redirect } from 'next/navigation';
import { validateSession } from '@/lib/auth';
import { Params } from '@/types/Params.types';
import {
  getMaterialBySlug,
  updateMaterialDownloadCount,
} from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';

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
    const material = await getMaterialBySlug(materialSlug);
    if (!material) {
      console.error('Material not found');
      return;
    }

    await updateMaterialDownloadCount(material._id.toString());
  } catch (error) {
    console.error('Error updating download count:', error);
  }
};

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const contentType = id.toLowerCase();
  const content = getContentByType(contentType);

  if (!content) {
    redirect('/404');
  }

  await increaseDownloadCount(content.materialSlug);

  let userName = 'za pobranie';
  try {
    const { session } = await validateSession();
    if (session?.name) {
      userName = session.name;
    }
  } catch (error) {
    console.log('No session available, using default name', error);
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
