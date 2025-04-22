import s from './NoteCard.component.module.scss';

import { memo } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/UI/Button/Button.component';

interface NoteCardProps {
  id: number;
  title: string;
  image: string;
  slug: string;
  type: 'ebook' | 'note';
  className?: string;
}

const NoteCard = memo(({ title, image, slug, type, className }: NoteCardProps) => {
  const resourceType = type === 'ebook' ? 'E-book' : 'Notatka';
  const basePath = type === 'ebook' ? '/Ebooki' : '/Notatki';
  const buttonText = type === 'ebook' ? 'Pobierz E-book' : 'Pobierz Notatkę';

  return (
    <article
      className={`${s.noteCard} ${className || ''}`}
      aria-label={`${resourceType}: ${title}`}
    >
      <div className={s.noteCard__imageWrapper} aria-hidden="true">
        <Image
          src={image}
          alt={`${resourceType} ${title}`}
          width={400}
          height={300}
          className={s.noteCard__image}
          loading="lazy"
          quality={75}
        />
      </div>

      <div className={s.noteCard__content}>
        <h2 className={s.noteCard__title}>{title}</h2>
        <Link
          href={`${basePath}/${slug}`}
          aria-label={`Pobierz ${type === 'ebook' ? 'e-book' : 'notatkę'}: ${title}`}
        >
          <Button type="normal" value={buttonText} />
        </Link>
      </div>
    </article>
  );
});

NoteCard.displayName = 'NoteCard';

export default NoteCard;
