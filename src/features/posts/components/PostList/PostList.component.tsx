import { PostItem } from "../PostItem/PostItem.component";

import type { Post } from "@/generated/models";

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <ul className="flex flex-col gap-2">
      {posts.map((post, idx) => {
        return <PostItem {...post} key={idx} />;
      })}
    </ul>
  );
};
