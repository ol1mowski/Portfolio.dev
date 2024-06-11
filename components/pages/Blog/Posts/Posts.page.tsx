import s from "./Posts.page.module.scss";

import { POSTS } from "./PostsStaticData";
import Button from "@/components/UI/Button/Button.component";
import PostCardComponent from "./PostCardComponent/PostCardComponent.component";
import Caption from "@/components/UI/Caption/Caption.component";

function Posts() {
  return (
    <section id="posts" className={s.container}>
      <section className={s.container__header}>
        <Caption type="sub" value="Ostatnie Posty" />
      </section>

      <section className={s.container__postsWrapper}>
        {POSTS.map((post) => (
          <PostCardComponent
            key={post.id}
            title={post.title}
            slug={post.slug}
            description={post.description}
            author={post.author}
            postImage={post.postImage}
            authorImage={post.authorImage}
            date={post.date}
          />
        ))}
      </section>
      <section className={s.container__button}>
        <Button value="Więcej" type="normal" />
      </section>
    </section>
  );
}

export default Posts;
