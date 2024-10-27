import ProjectComponent from "../ProjectContainer/ProjectContainer.component";
import { type ProjectType } from "@/types/PostType.type";

const Project = ({
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
  );
};

export default Project;
