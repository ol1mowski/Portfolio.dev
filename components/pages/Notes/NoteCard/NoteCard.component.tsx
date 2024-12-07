import s from "./NoteCard.component.module.scss";

import { memo } from 'react';

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/UI/Button/Button.component";

import type { NoteCardProps } from "@/types/notes";


const NoteCard = memo(({ 
  title, 
  image, 
  slug,
  className 
}: NoteCardProps) => {
  return (
    <article 
      className={`${s.noteCard} ${className || ''}`}
      aria-label={`Notatka: ${title}`}
    >
      <div 
        className={s.noteCard__imageWrapper}
        aria-hidden="true"
      >
        <Image
          src={image}
          alt={`Notatki ${title}`}
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
          href={`/Notatki/${slug}`}
          aria-label={`Pobierz notatkę: ${title}`}
        >
          <Button 
            type="normal" 
            value="Pobierz Notatkę"
          />
        </Link>
      </div>
    </article>
  );
});


export default NoteCard; 