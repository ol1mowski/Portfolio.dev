import style from "./ProjectContainer.component.module.scss";

import { type ProjectType } from "@/types/PostType.type";

import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";
import ProjectCta from "./ProjectCta/ProjectCta.component";
import ProjectTitle from "./ProjectTitle/ProjectTitle.component";
import ProjectImage from "./ProjectImage/ProjectImage.component";
import ProjectTools from "./ProjectTools/ProjectTools.component";
import ProjectDescription from "./ProjectDescription/ProjectDescription.component";

const ProjectComponent = ({
  image,
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  date,
}: ProjectType) => {
  return (
    <AnimationWrapper>
      <section className={style.projectWrapper}>
        <ProjectImage image={image} />
        <section className={style.projectWrapper__descriSection}>
          <ProjectTitle title={title} date={date} />
          <ProjectDescription description={description} />
          <ProjectTools technologies={technologies} />
          <ProjectCta liveLink={liveLink} githubLink={githubLink} />
        </section>
      </section>
    </AnimationWrapper>
  );
};

export default ProjectComponent;
