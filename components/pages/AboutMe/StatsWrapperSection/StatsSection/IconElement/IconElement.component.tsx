import Image from 'next/image';
import s from './IconElement.component.module.scss';

function IconElement({
  src,
  alt,
  href,
  yt,
}: {
  src: string;
  alt: string;
  href: string;
  yt?: boolean;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image className={s.img} src={src} alt={alt} width={yt ? 40 : 30} height={yt ? 40 : 30} />
    </a>
  );
}

export default IconElement;
