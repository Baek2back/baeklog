import { useCallback, useEffect } from "react";
import { usePostsData } from "@/features/posts/hooks";

export const usePostsView = () => {
  const { postsLoading, posts, getAllPosts } = usePostsData();

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  const handleRefreshButtonClick = useCallback(() => {
    getAllPosts();
  }, [getAllPosts]);

  return {
    postsLoading,
    posts,
    handleRefreshButtonClick
  };
};
