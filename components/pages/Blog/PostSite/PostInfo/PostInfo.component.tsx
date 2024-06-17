import s from "./PostInfo.component.module.scss";

import Image from "next/image";

import authorImage from "@/assets/author_about.svg";
import categoryIcon from "@/assets/category.svg";
import calenderIcon from "@/assets/calendar.svg";
import readingTimeIcon from "@/assets/time.svg";
import Caption from "@/components/UI/Caption/Caption.component";

function PostInfo({
  author,
  readTime,
  date,
  category,
  title,
}: {
  author: string;
  readTime: number;
  date: string;
  title: string;
  category: string;
}) {
  return (
    <>
      <div className={s.header}>
        <Caption type="sub" value={title} />
      </div>
      <div className={s.postInfo}>
        <Image
          src={authorImage}
          alt="author's avatar"
          width={40}
          height={40}
          className={s.postInfo__avatar}
        />
        <span className={s.postInfo__info}>{author}</span>
        <Image src={calenderIcon} alt="date icon" width={25} height={25} />

        <span className={s.postInfo__info}>{date}</span>
        <Image src={categoryIcon} alt="category icon" width={25} height={25} />

        <span className={s.postInfo__info}>{category}</span>
        <Image
          src={readingTimeIcon}
          alt="reading time icon"
          width={25}
          height={25}
        />

        <span className={s.postInfo__info}>{readTime} min.</span>
      </div>
    </>
  );
}

export default PostInfo;
