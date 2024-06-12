import Image from "next/image";
import s from "./PostCardComponent.component.module.scss";
import { PostCardType } from "@/types/PostType";
import Link from "next/link";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";

function PostCardComponent({
  title,
  description,
  postImage,
  authorImage,
  author,
  date,
  slug,
}: PostCardType) {
  return (
    <AnimationWrapper>
      <Link href={`/Blog/posty/${slug}`}>
        <div className={s.postCard}>
          <div className={s.postCard__imageSection}>
            <Image
              className={s.postCard__imageSection__img}
              src={postImage}
              alt="post image"
              width={300}
              height={200}
            />
          </div>
          <div className={s.postCard__contentSection}>
            <h3 className={s.postCard__contentSection__title}>{title}</h3>
            <p className={s.postCard__contentSection__description}>
              {description}
            </p>
          </div>

          <div className={s.postCard__authorSection}>
            <Image
              className={s.postCard__authorSection__avatar}
              src={authorImage}
              alt="author photo"
              width={45}
              height={45}
            />
            <span className={s.postCard__authorSection__name}>{author}</span>
            <div className={s.postCard__authorSection__dot}></div>
            <span className={s.postCard__authorSection__date}>{date}</span>
          </div>
        </div>
      </Link>
    </AnimationWrapper>
  );
}

export default PostCardComponent;
