import s from './MaterialCard.component.module.scss';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/UI/Button/Button.component';
import { MaterialType } from '@/types/Materials.types';

interface MaterialCardProps {
  material: MaterialType;
}

const MaterialCard = memo(({ material }: MaterialCardProps) => {
  const {
    title,
    image,
    slug,
    type,
    category,
    categoryType,
    tags,
    description,
    downloadCount,
    size,
    format,
    publishDate,
    isPremium,
  } = material;

  const typeLabels = {
    ebook: 'E-book',
    note: 'Notatka',
  };

  const categoryTypeLabels = {
    techniczne: 'Techniczne',
    rozwojowe: 'Rozwojowe',
  };

  const basePath = type === 'ebook' ? '/Ebooki' : '/Notatki';
  const downloadText = type === 'ebook' ? 'Pobierz E-book' : 'Pobierz Notatkę';

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatDownloadCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <article className={s.materialCard}>
      <div className={s.imageWrapper}>
        {type === 'note' ? (
          <div className={s.noteBackground}>
            <div className={s.text}>NOTATKA</div>
          </div>
        ) : (
          <Image
            src={image}
            alt={`${typeLabels[type]} ${title}`}
            width={400}
            height={300}
            className={s.image}
            loading="lazy"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        )}

        <div className={s.overlay}>
          <div className={s.stats}>
            <span className={s.downloads}>⬇ {formatDownloadCount(downloadCount)}</span>
            <span className={s.size}>{size}</span>
          </div>
        </div>
      </div>

      <div className={s.content}>
        <div className={s.header}>
          <div className={s.meta}>
            <span className={`${s.typeTag} ${s[type]}`}>{typeLabels[type]}</span>
            <span className={s.category}>{category}</span>
          </div>
          <h3 className={s.title}>{title}</h3>
          <span className={`${s.categoryType} ${s[categoryType]}`}>
            {categoryTypeLabels[categoryType]}
          </span>
        </div>

        <p className={s.description}>{description}</p>

        <div className={s.tags}>
          {tags.slice(0, 4).map(tag => (
            <span key={tag} className={s.tag}>
              #{tag}
            </span>
          ))}
        </div>

        <div className={s.footer}>
          <div className={s.additionalInfo}>
            <span className={s.format}>{format}</span>
            <span className={s.date}>{formatDate(publishDate)}</span>
          </div>
          <div className={s.buttonWrapper}>
            <Link target="_blank" download href={`/${slug}.pdf`}>
              <Button type="normal" value={downloadText} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
});

MaterialCard.displayName = 'MaterialCard';

export default MaterialCard;
