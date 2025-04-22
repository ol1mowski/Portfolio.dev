import Image from 'next/image';
import s from './KeyTechnologies.component.module.scss';
import { KEY_TECHNOLOGIES } from '@/data/Skills.data';

function KeyTechnologies() {
  return (
    <div className={s.infoWrapper}>
      <div className={s.infoWrapper__iconsWrapper}>
        {KEY_TECHNOLOGIES.map(({ id, src, alt, width, height }) => (
          <Image key={id} src={src} alt={alt} width={width} height={height} />
        ))}
      </div>
      <span className={s.infoWrapper__des}>Kluczowe Technologie</span>
    </div>
  );
}

export default KeyTechnologies;
