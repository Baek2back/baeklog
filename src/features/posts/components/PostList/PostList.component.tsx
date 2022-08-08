import type { Post } from "@/generated/models";
import { clsxm } from "@/lib";

import { PostItem } from "../PostItem/PostItem.component";

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <ul className={clsxm("flex flex-col gap-2")}>
      {posts.map((post, idx) => {
        return <PostItem {...post} key={idx} />;
      })}
    </ul>
  );
};
