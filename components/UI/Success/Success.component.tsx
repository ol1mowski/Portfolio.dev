import s from './Success.component.module.scss';

function Success() {
  return (
    <section className={s.success}>
      <h1 className={s.success__header}>Sukces !</h1>
      <p className={s.success__text}>Udało się ! Wkrótce zostaniesz przekierowany</p>
    </section>
  );
}

export default Success;
