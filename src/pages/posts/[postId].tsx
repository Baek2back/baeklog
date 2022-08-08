import type { NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { END } from "redux-saga";

import { PostDetailPanel, PostModifyForm } from "@/features/posts/components";
import { postsAsyncActions } from "@/features/posts/store";
import { useBoolean } from "@/shared/hooks";
import { isFalsy } from "@/shared/utils/assertion";
import { wrapper } from "@/store";

const usePostPage = () => {
  const [isEditStatus, { toggle: toggleEditStatus }] = useBoolean(false);

  return { isEditStatus, toggleEditStatus };
};

const PostPage: NextPage = () => {
  const { isEditStatus, toggleEditStatus } = usePostPage();
  return isEditStatus ? (
    <PostModifyForm toggleEditStatus={toggleEditStatus} />
  ) : (
    <PostDetailPanel toggleEditStatus={toggleEditStatus} />
  );
};

interface Params extends ParsedUrlQuery {
  postId: string;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { postId } = context.params as Params;

    if (isFalsy(postId)) {
      return {
        notFound: true
      };
    }

    store.dispatch(postsAsyncActions.getPostById.request({ id: postId }));
    store.dispatch(END);
    await store.sagaTask?.toPromise();

    return {
      props: {}
    };
  }
);

export { PostPage as default };
