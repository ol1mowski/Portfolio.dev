import s from "./PostInfo.component.module.scss";

import Image from "next/image";

import Caption from "@/components/UI/Caption/Caption.component";

function PostInfo({
  author,
  readTime,
  date,
  category,
  title,
  authorImage,
}: {
  author: string;
  readTime: number;
  authorImage: string;
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
        <Image src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1731069185/Portfolio/Icons/calendar_dbxa0f.svg" alt="date icon" width={25} height={25} />

        <span className={s.postInfo__info}>{date}</span>
        <Image src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1731069185/Portfolio/Icons/category_frjgj3.svg" alt="category icon" width={25} height={25} />

        <span className={s.postInfo__info}>{category}</span>
        <Image
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1731069185/Portfolio/Icons/time_vdkuso.svg"
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
