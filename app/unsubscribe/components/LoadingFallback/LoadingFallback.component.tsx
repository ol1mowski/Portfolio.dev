import s from '../../page.module.scss';

export default function LoadingFallback() {
  return (
    <main className={s.container}>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>Ładowanie...</h1>
        </div>
      </div>
    </main>
  );
}
