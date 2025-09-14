import { validateSession } from '@/lib/auth';
import MaterialsPageClient from './MaterialsPageClient';

export default async function MaterialsPage() {
  const { session } = await validateSession();

  return <MaterialsPageClient hasSession={!!session} />;
}
