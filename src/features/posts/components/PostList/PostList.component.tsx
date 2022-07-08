import { PostItem } from "../PostItem/PostItem.component";
import * as S from "./PostList.style";

import type { Post } from "@/generated/models";

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <S.PostListContainer>
      {posts.map((post, idx) => {
        return <PostItem {...post} key={idx} />;
      })}
    </S.PostListContainer>
  );
};
