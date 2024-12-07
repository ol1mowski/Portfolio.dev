import s from "./page.module.scss";

import dynamic from 'next/dynamic';

import Header from "@/components/pages/Header/Header.component";
import Footer from "@/components/pages/Footer/Footer.page";

import { NOTES } from "@/data/Notes.data";

const NoteCard = dynamic(() => 
  import("@/components/pages/Notes/NoteCard/NoteCard.component"), {
  loading: () => <div>Loading...</div>
});

export default function NotesPage() {
  return (
    <>
      <Header />
      <main 
        className={s.container}
        aria-label="Strona z notatkami"
      >
        <h1 className={s.container__header}>Notatki</h1>
        <section 
          className={s.notesGrid}
          aria-label="Lista notatek"
        >
          {NOTES.map((note) => (
            <NoteCard 
              key={note.id} 
              {...note} 
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
