import s from '../../page.module.scss';

interface UnsubscribeInfoProps {
  title: string;
  items: readonly string[];
}

export default function UnsubscribeInfo({ title, items }: UnsubscribeInfoProps) {
  return (
    <div className={s.info}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
