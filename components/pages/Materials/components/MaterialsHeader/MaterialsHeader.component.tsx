import { memo } from 'react';
import s from './MaterialsHeader.component.module.scss';

interface MaterialsHeaderProps {
  title?: string;
  subtitle?: string;
}

const MaterialsHeader = memo(
  ({
    title = 'Centrum Materiałów',
    subtitle = 'Odkryj najlepsze materiały edukacyjne - e-booki, notatki i zasoby dodatkowe. Wszystko w jednym miejscu, z zaawansowanym filtrowaniem.',
  }: MaterialsHeaderProps) => {
    return (
      <section className={s.materialsHeader}>
        <div className={s.materialsHeader__content}>
          <h1 className={s.materialsHeader__title}>
            Centrum <span className={s.materialsHeader__gradient}>Materiałów</span>
          </h1>
          <p className={s.materialsHeader__subtitle}>{subtitle}</p>
        </div>
      </section>
    );
  }
);

MaterialsHeader.displayName = 'MaterialsHeader';

export default MaterialsHeader;
