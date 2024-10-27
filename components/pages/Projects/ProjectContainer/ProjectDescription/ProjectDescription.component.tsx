import s from './ProjectDescription.component.module.scss';

function ProjectDescription({ description }: { description: string}) {
  return (
    <section className={s.contentSection}>
      <p className={s.contentSection__pBig}>
        {description}
      </p>
    </section>
  );
}

export default ProjectDescription;
