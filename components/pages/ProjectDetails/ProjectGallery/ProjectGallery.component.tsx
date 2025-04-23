'use client';

import Image from 'next/image';
import { useState } from 'react';
import s from './ProjectGallery.component.module.scss';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(
    images.length > 0 ? images[0] : null
  );

  if (!images.length) {
    return <p>Brak zdjęć do wyświetlenia</p>;
  }

  return (
    <div className={s.galleryContainer}>
      <div className={s.mainImageContainer}>
        {selectedImage && (
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={1200}
            height={600}
            className={s.mainImage}
          />
        )}
      </div>

      <div className={s.thumbnailsContainer}>
        {images.map(image => (
          <button
            key={image.id}
            className={`${s.thumbnailButton} ${selectedImage?.id === image.id ? s.active : ''}`}
            onClick={() => setSelectedImage(image)}
            type="button"
            aria-label={`Pokaż ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={120}
              height={80}
              className={s.thumbnailImage}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
