import s from './NumberOfService.component.module.scss';

function NumberOfService({ number } : { number: number}) {
  return (
    <section className={s.slideNumberWrapper}>
      <span className={s.slideNumberWrapper__number}>0{number}</span>
    </section>
  );
}

export default NumberOfService;
