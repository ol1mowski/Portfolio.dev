import s from './ProjectHeader.component.module.scss';

function ProjectHeader() {
  return (
    <section className={s.contentSection}>
      <h3 className={s.contentSection__h3}>Projekty</h3>
      <h4 className={s.contentSection__h4}>
        Zobacz Ostatnie Stworzone Przeze Mnie Strony Internetowe
      </h4>
    </section>
  );
}

export default ProjectHeader;
