import s from "./Posts.page.module.scss";

import PostCardComponent from "./PostCardComponent/PostCardComponent.component";
import { type PostsType } from "@/types/PostType.type";
import PostsHeader from "./PostsHeader/PostsHeader.component";
import PostsButton from "./PostsButton/PostsButton.component";

function PostsComponent({ posts }: { posts: PostsType[] }) {
  return (
    <section id="posts" className={s.container}>
      <PostsHeader />
      <section className={s.container__postsWrapper}>
        {posts.map((post) => {
          const { id, title, slug, description, author, image, authorImage, date } = post;
          return (
            <PostCardComponent
              id={id}
              key={id}
              title={title}
              slug={slug}
              description={description}
              author={author}
              image={image}
              authorImage={authorImage}
              date={date}
            />
          );
        })}
      </section>
      <PostsButton />
    </section>
  );
}

export default PostsComponent;
