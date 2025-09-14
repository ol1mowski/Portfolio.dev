import s from './layout.module.scss';

export default function MaterialsLayout({ children }: { children: React.ReactNode }) {
  return <div className={s.materialsLayout}>{children}</div>;
}
