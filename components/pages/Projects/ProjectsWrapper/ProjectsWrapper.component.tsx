import { type ReactNode } from "react";
import s from './ProjectsWrapper.component.module.scss';

function ProjectsWrapper({ children }: { children: ReactNode }) {
  return <section className={s.projectsWrapper}>{children}</section>;
}

export default ProjectsWrapper;
