import style from "./ProjectReverseCheck.component.module.scss";
import ProjectComponent from "../../pages/Projects/ProjectContainer/ProjectContainer.component";
import { ProjectType } from "@/types/PostType.type";


const Project = ({
  reverse,
  image,
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  date,
  id,
}: ProjectType) => {
  return (
    <>
      {reverse ? (
        <ProjectComponent
          id={style.reverse}
          image={image}
          title={title}
          description={description}
          technologies={technologies}
          liveLink={liveLink}
          githubLink={githubLink}
          date={date}
        />
      ) : (
        <ProjectComponent
          id={id}
          image={image}
          title={title}
          description={description}
          technologies={technologies}
          liveLink={liveLink}
          githubLink={githubLink}
          date={date}
        />
      )}
    </>
  );
};

export default Project;
