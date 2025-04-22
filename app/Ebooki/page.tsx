import { EBOOKS } from '@/data/Notes.data';
import ResourcesPage from '@/components/pages/Resources/ResourcesPage/ResourcesPage.component';

export default function EbooksPage() {
  return <ResourcesPage title="E-booki" resources={EBOOKS} type="ebook" />;
}
