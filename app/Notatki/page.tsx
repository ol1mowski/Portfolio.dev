import { NOTES } from "@/data/Notes.data";
import ResourcesPage from "@/components/pages/Resources/ResourcesPage/ResourcesPage.component";

export default function NotesPage() {
  return (
    <ResourcesPage 
      title="Notatki"
      resources={NOTES}
      type="note"
    />
  );
}
