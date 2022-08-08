import { useCallback } from "react";

import {
  postsAsyncActions,
  postSelector,
  postsSelector
} from "@/features/posts/store";
import {
  PostsApiCreateRequest,
  PostsApiFindOneRequest,
  PostsApiRemoveRequest,
  PostsApiUpdateRequest
} from "@/generated/api/posts-api";
import { useAppDispatch, useAppSelector } from "@/store";

export const usePostsData = () => {
  const {
    loading: postsLoading,
    data: posts,
    error: postsError
  } = useAppSelector(postsSelector);

  const {
    loading: postLoading,
    data: post,
    error: postError
  } = useAppSelector(postSelector);

  const dispatch = useAppDispatch();

  const getAllPosts = useCallback(() => {
    dispatch(postsAsyncActions.getAllPosts.request({}));
  }, [dispatch]);

  const deletePost = useCallback(
    (
      postsApiRemoveRequest: PostsApiRemoveRequest,
      { onSuccess }: { onSuccess: () => void }
    ) => {
      dispatch(
        postsAsyncActions.deletePostById.request({
          ...postsApiRemoveRequest,
          onSuccess
        })
      );
    },
    [dispatch]
  );

  const getPostById = useCallback(
    (postsApiFindOneRequest: PostsApiFindOneRequest) => {
      dispatch(postsAsyncActions.getPostById.request(postsApiFindOneRequest));
    },
    [dispatch]
  );

  const createPost = useCallback(
    (
      postApiCreateRequest: PostsApiCreateRequest,
      { onSuccess }: { onSuccess: (id: string) => void }
    ) => {
      dispatch(
        postsAsyncActions.createPost.request({
          ...postApiCreateRequest,
          onSuccess
        })
      );
    },
    [dispatch]
  );

  const editPost = useCallback(
    (
      postsApiUpdateRequest: PostsApiUpdateRequest,
      { onSuccess }: { onSuccess: () => void }
    ) => {
      dispatch(
        postsAsyncActions.editPost.request({
          ...postsApiUpdateRequest,
          onSuccess
        })
      );
    },
    [dispatch]
  );

  return {
    postsLoading,
    posts,
    postsError,
    postLoading,
    post,
    postError,
    getAllPosts,
    createPost,
    editPost,
    getPostById,
    deletePost
  };
};
