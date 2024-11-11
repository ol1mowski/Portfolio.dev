import { memo } from 'react';
import dynamic from 'next/dynamic';
import type { ProjectType } from "@/types/PostType.type";
import s from "./ProjectContainer.component.module.scss";

const AnimationWrapper = dynamic(() => 
  import("@/components/UI/AnimationWrapper/AnimationWrapper.component"));
const ProjectImage = dynamic(() => import("./ProjectImage/ProjectImage.component"));
const ProjectTitle = dynamic(() => import("./ProjectTitle/ProjectTitle.component"));
const ProjectDescription = dynamic(() => import("./ProjectDescription/ProjectDescription.component"));
const ProjectTools = dynamic(() => import("./ProjectTools/ProjectTools.component"));
const ProjectCta = dynamic(() => import("./ProjectCta/ProjectCta.component"));

const ProjectComponent = memo(({
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
      <article 
        className={s.projectWrapper}
        aria-label={`Project: ${title}`}
      >
        <ProjectImage 
          image={image} 
        />
        <div className={s.projectWrapper__descriSection}>
          <ProjectTitle title={title} date={date} />
          <ProjectDescription description={description} />
          <ProjectTools technologies={technologies} />
          <ProjectCta 
            liveLink={liveLink} 
            githubLink={githubLink} 
          />
        </div>
      </article>
    </AnimationWrapper>
  );
});

ProjectComponent.displayName = 'ProjectComponent';

export default ProjectComponent;
