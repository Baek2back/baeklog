import { IconButton, Spinner } from "@/components/common";
import { MdRefresh } from "react-icons/md";
import { PostCreatePanel } from "../PostCreatePanel/PostCreatePanel.component";
import { PostList } from "../PostList/PostList.component";
import * as S from "./PostsView.style";
import { usePostsView } from "./PostsView.hook";
import { isEmpty } from "@/shared/utils/assertion";

export const PostsView = () => {
  const { postsLoading, posts, handleRefreshButtonClick } = usePostsView();
  return (
    <>
      <S.PostsViewHeader>
        <S.PostsViewTitle>Baeklog 👋</S.PostsViewTitle>
        <IconButton icon={<MdRefresh />} onClick={handleRefreshButtonClick} />
      </S.PostsViewHeader>
      <S.PostsViewMain>
        {postsLoading ? (
          <Spinner />
        ) : isEmpty(posts) ? (
          "게시글이 없습니다."
        ) : (
          <PostList posts={posts} />
        )}
        <PostCreatePanel />
      </S.PostsViewMain>
    </>
  );
};
