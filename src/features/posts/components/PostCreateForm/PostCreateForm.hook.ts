import { useRouter } from "next/router";

import { usePostsData } from "@/features/posts/hooks";
import type { Post } from "@/generated/models";
import { useForm } from "@/shared/hooks";

export const usePostCreateForm = () => {
  const router = useRouter();
  const { createPost } = usePostsData();

  const {
    values: { title, content },
    handleChange,
    handleSubmit
  } = useForm<Post>({
    initialValues: {
      title: "",
      content: ""
    },
    onSubmit: () => {
      createPost(
        {
          createPostDto: {
            title,
            content
          }
        },
        {
          onSuccess: (id: string) =>
            router.push({
              pathname: "/posts/[postId]",
              query: {
                postId: id
              }
            })
        }
      );
    }
  });

  const handleTitleChange = handleChange("title");

  const handleContentChange = handleChange("content");

  return {
    title,
    content,
    handleTitleChange,
    handleContentChange,
    handleSubmit
  };
};
