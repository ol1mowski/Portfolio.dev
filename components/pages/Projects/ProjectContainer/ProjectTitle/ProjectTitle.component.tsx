import s from './ProjectTitle.component.module.scss';

const ProjectTitle = ({ title, date }: { title: string; date: string }) => {
  return (
    <section className={s.titleSection}>
      <div className={s.titleSection__wrapper}>
        <h3 className={s.titleSection__wrapper__h3}>{title}</h3>
        <p className={s.titleSection__wrapper__p}>({date})</p>
      </div>
    </section>
  );
};

export default ProjectTitle;
