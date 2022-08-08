import { useRouter } from "next/router";
import { useCallback } from "react";

import { usePostsData } from "@/features/posts/hooks";
import type { Post } from "@/generated/models";
import { useForm } from "@/shared/hooks";

interface UsePostModifyFormProps {
  toggleEditStatus: () => void;
}

export const usePostModifyForm = ({
  toggleEditStatus
}: UsePostModifyFormProps) => {
  const router = useRouter();
  const postId = router.query.postId as string;

  const { post, editPost } = usePostsData();

  const {
    values: { title, content },
    handleChange,
    handleSubmit
  } = useForm<Post>({
    initialValues: {
      title: post.title,
      content: post.content
    },
    onSubmit: () => {
      const request = {
        id: postId,
        updatePostDto: {
          title,
          content
        }
      };

      editPost(request, { onSuccess: toggleEditStatus });
    }
  });

  const handleTitleChange = handleChange("title");

  const handleContentChange = handleChange("content");

  const handleCancelButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      toggleEditStatus();
    },
    [toggleEditStatus]
  );

  return {
    toggleEditStatus,
    handleSubmit,
    handleTitleChange,
    handleContentChange,
    handleCancelButtonClick,
    post,
    title,
    content
  };
};
