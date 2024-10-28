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
        {posts.map((post) => (
          <PostCardComponent
            id={post.id}
            key={post.id}
            title={post.title}
            slug={post.slug}
            description={post.description}
            author={post.author}
            image={post.image}
            authorImage={post.authorImage}
            date={post.date}
          />
        ))}
      </section>
      <PostsButton />
    </section>
  );
}

export default PostsComponent;
