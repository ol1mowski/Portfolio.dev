import { memo } from 'react';
import type { ProjectType } from '@/types/PostType.types';
import s from './ProjectContainer.component.module.scss';
import AnimationWrapper from '@/components/UI/AnimationWrapper/AnimationWrapper.component';
import ProjectImage from './ProjectImage/ProjectImage.component';
import ProjectTitle from './ProjectTitle/ProjectTitle.component';
import ProjectDescription from './ProjectDescription/ProjectDescription.component';
import ProjectTools from './ProjectTools/ProjectTools.component';
import ProjectCta from './ProjectCta/ProjectCta.component';

const ProjectComponent = memo(
  ({ image, title, description, technologies, liveLink, githubLink, date }: ProjectType) => {
    return (
      <AnimationWrapper>
        <article className={s.projectWrapper} aria-label={`Project: ${title}`}>
          <ProjectImage image={image} />
          <div className={s.projectWrapper__descriSection}>
            <ProjectTitle title={title} date={date} />
            <ProjectDescription description={description} />
            <ProjectTools technologies={technologies} />
            <ProjectCta liveLink={liveLink} githubLink={githubLink} title={title} />
          </div>
        </article>
      </AnimationWrapper>
    );
  }
);

ProjectComponent.displayName = 'ProjectComponent';

export default ProjectComponent;
