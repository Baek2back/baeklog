import { postsStore } from "@/store";

import { createContext, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import type { First } from "@/shared/utils/types";

const PostsStoreContext = createContext(postsStore);

export const usePostsData = () => {
  const navigate = useNavigate();
  const postsStore = useContext(PostsStoreContext);
  const {
    loading: postsLoading,
    data: posts,
    error: postsError
  } = postsStore.state.posts;

  const {
    loading: postLoading,
    data: post,
    error: postError
  } = postsStore.state.post;

  const getAllPosts = useCallback(() => {
    postsStore.getAllPosts();
  }, [postsStore]);

  const deletePost = useCallback(
    (request: First<Parameters<typeof postsStore.deletePostById>>) => {
      postsStore.deletePostById(request, navigate);
    },
    [postsStore, navigate]
  );

  const getPostById = useCallback(
    (request: First<Parameters<typeof postsStore.getPostById>>) => {
      postsStore.getPostById(request);
    },
    [postsStore]
  );

  const createPost = useCallback(
    (request: First<Parameters<typeof postsStore.createPost>>) => {
      postsStore.createPost(request, navigate);
    },
    [postsStore, navigate]
  );

  const editPost = useCallback(
    (
      request: First<Parameters<typeof postsStore.editPostById>>,
      onSuccess: () => void
    ) => {
      postsStore.editPostById(request, onSuccess);
    },
    [postsStore]
  );

  return {
    postsLoading,
    posts,
    postsError,
    postLoading,
    post,
    postError,
    getAllPosts,
    deletePost,
    getPostById,
    createPost,
    editPost
  };
};
