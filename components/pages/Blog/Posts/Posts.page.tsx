import s from "./Posts.page.module.scss";

import PostCardComponent from "./PostCardComponent/PostCardComponent.component";
import { type PostsType } from "@/types/PostType.type";
import PostsHeader from "./PostsHeader/PostsHeader.component";
import PostsButton from "./PostsButton/PostsButton.component";

function PostsComponent({ posts }: { posts: PostsType[] }) {
  return (
    <section className={s.container} id="posts" data-testid="posts-section">
      <PostsHeader />
      <section className={s.container__postsWrapper} data-testid="posts-wrapper">
        {posts.map((post) => {
          const { id, title, slug, description, author, image, authorImage, date } = post;
          return (
            <PostCardComponent
              key={`post-${id}-${slug}`}
              id={id}
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
