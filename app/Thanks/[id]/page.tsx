import { redirect } from 'next/navigation';
import { validateSession } from '@/lib/auth';
import { Params } from '@/types/Params.types';

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const contentType = id.toLowerCase();

  try {
    const { session } = await validateSession();
    if (!session) {
      redirect('/');
    }
  } catch (error) {
    redirect('/');
  }

  if (contentType === 'ebook' || contentType === 'note') {
    redirect('/materialy');
  }

  redirect('/404');
}
