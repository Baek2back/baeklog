import type { NextPage } from "next";
import { useCallback } from "react";
import { MdRefresh } from "react-icons/md";
import { END } from "redux-saga";

import { IconButton, Spinner } from "@/components";
import { PostCreatePanel, PostList } from "@/features/posts/components";
import { usePostsData } from "@/features/posts/hooks";
import { postsAsyncActions } from "@/features/posts/store";
import { clsxm } from "@/lib";
import { isEmpty } from "@/shared/utils/assertion";
import { wrapper } from "@/store";

const usePostsPage = () => {
  const { postsLoading, posts, getAllPosts } = usePostsData();

  const handleRefreshButtonClick = useCallback(() => {
    getAllPosts();
  }, [getAllPosts]);

  return {
    postsLoading,
    posts,
    handleRefreshButtonClick
  };
};

const PostsPage: NextPage = () => {
  const { postsLoading, posts, handleRefreshButtonClick } = usePostsPage();

  return (
    <>
      <header
        className={clsxm(
          "flex items-center justify-between border-b border-b-[#e9ecef] px-9 pt-12 pb-6"
        )}
      >
        <h1 className={clsxm("text-4xl text-[#343a40]")}>Baeklog 👋</h1>
        <IconButton icon={<MdRefresh />} onClick={handleRefreshButtonClick} />
      </header>
      <main className={clsxm("flex-1 overflow-y-auto px-8 pb-12 pt-5")}>
        {postsLoading ? (
          <Spinner />
        ) : isEmpty(posts) ? (
          "게시글이 없습니다."
        ) : (
          <PostList posts={posts} />
        )}
        <PostCreatePanel />
      </main>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(postsAsyncActions.getAllPosts.request({}));
    store.dispatch(END);
    await store.sagaTask?.toPromise();

    return {
      props: {}
    };
  }
);

export { PostsPage as default };
