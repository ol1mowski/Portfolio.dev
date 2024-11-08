import s from './Label.component.module.scss';

function Label({ ifFirst } : { ifFirst: boolean}) {
  return (
    <>
      {ifFirst && (
        <div className={s.aboutSectionWrapper}>
          <span className={s.aboutSectionWrapper__content}>
            Usługi
          </span>
        </div>
      )}
    </>
  );
}

export default Label;
