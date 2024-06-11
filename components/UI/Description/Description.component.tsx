import s from './Description.component.module.scss';

function Description({ value }: { value: string}) {
  return (
    <p className={s.description}>
      { value }
    </p>
  );
}

export default Description;
