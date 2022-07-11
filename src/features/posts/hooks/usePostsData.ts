import { postSelector, postsSelector } from "@/features/posts";
import { postsAsyncActions } from "@/features/posts/remotes/saga";
import {
  PostsApiCreateRequest,
  PostsApiFindOneRequest,
  PostsApiRemoveRequest,
  PostsApiUpdateRequest
} from "@/generated/api/posts-api";
import { useAppSelector, useAppDispatch } from "@/store";
import { useCallback } from "react";

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
    (postsApiRemoveRequest: PostsApiRemoveRequest) => {
      dispatch(postsAsyncActions.deletePostById.request(postsApiRemoveRequest));
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
    (postApiCreateRequest: PostsApiCreateRequest) => {
      dispatch(postsAsyncActions.createPost.request(postApiCreateRequest));
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
