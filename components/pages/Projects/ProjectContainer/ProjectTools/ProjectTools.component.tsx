import s from './ProjectTools.component.module.scss';

const ProjectTools = ({ technologies }: { technologies: string[] }) => {
  return (
    <section className={s.toolsSection}>
      {technologies.map((tech, index) => (
        <div key={index} className={s.toolsSection__tool}>
          {tech}
        </div>
      ))}
    </section>
  );
};

export default ProjectTools;