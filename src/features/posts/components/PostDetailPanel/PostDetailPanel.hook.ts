import { useRouter } from "next/router";
import { useCallback } from "react";

import { usePostsData } from "@/features/posts/hooks";

export const usePostDetailPanel = () => {
  const router = useRouter();
  const postId = router.query.postId as string;

  const { postLoading, post, deletePost } = usePostsData();

  const handleDeleteButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      const request = {
        id: postId
      };

      deletePost(request, {
        onSuccess: () => router.push({ pathname: "/posts" })
      });
    },
    [postId, deletePost, router]
  );

  return {
    postLoading,
    post,
    handleDeleteButtonClick
  };
};
