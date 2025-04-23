import s from './ProjectTitle.component.module.scss';
import { formatDate } from '@/utils/dateFormatters';

interface ProjectTitleProps {
  title: string;
  date: string;
}

const ProjectTitle = ({ title, date }: ProjectTitleProps) => {
  const formattedDate = formatDate(date);

  return (
    <div className={s.titleSection}>
      <h3 className={s.titleSection__title}>{title}</h3>
      <time className={s.titleSection__date}>{formattedDate}</time>
    </div>
  );
};

export default ProjectTitle;
