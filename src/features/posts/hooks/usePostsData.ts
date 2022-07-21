import { postsStore } from "@/store";

import { createContext, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import type { First } from "@/shared/utils/types";

const PostsStoreContext = createContext(postsStore);

export const usePostsData = () => {
  const navigate = useNavigate();
  const postsStore = useContext(PostsStoreContext);

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
    postsLoading: postsStore.state.posts.loading,
    posts: postsStore.state.posts.data,
    postsError: postsStore.state.posts.error,
    postLoading: postsStore.state.post.loading,
    post: postsStore.state.post.data,
    postError: postsStore.state.post.error,
    getAllPosts,
    deletePost,
    getPostById,
    createPost,
    editPost
  };
};
