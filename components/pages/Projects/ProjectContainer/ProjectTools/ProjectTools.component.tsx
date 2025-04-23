import s from './ProjectTools.component.module.scss';

interface ProjectToolsProps {
  technologies: string[];
}

const ProjectTools = ({ technologies }: ProjectToolsProps) => {
  return (
    <div className={s.toolsSection}>
      <div className={s.toolsContainer}>
        {technologies.map((tech, index) => (
          <span key={index} className={s.tool}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectTools;
