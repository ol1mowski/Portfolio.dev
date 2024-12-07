export interface NoteType {
  id: number;
  title: string;
  image: string;
  slug: string;
}

export interface NoteCardProps extends NoteType {
  className?: string;
} 