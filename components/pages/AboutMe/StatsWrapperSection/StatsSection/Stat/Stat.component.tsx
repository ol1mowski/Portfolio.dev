import s from './Stat.component.module.scss';

function Stat({ number, title }: { number: number; title: string }) {
  return (
    <div className={s.infoWrapper}>
      <h4 className={s.infoWrapper__header}>{number}</h4>
      <span className={s.infoWrapper__des}>{title}</span>
    </div>
  );
}

export default Stat;
