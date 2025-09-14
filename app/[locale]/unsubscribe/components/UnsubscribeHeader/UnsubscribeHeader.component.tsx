import s from '../../page.module.scss';

interface UnsubscribeHeaderProps {
  title: string;
  subtitle: string;
}

export default function UnsubscribeHeader({ title, subtitle }: UnsubscribeHeaderProps) {
  return (
    <div className={s.header}>
      <h1 className={s.title}>{title}</h1>
      <p className={s.subtitle}>{subtitle}</p>
    </div>
  );
}
