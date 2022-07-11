import { useCallback, useState } from "react";
import { usePostsData } from "@/features/posts/hooks";

export const usePostCreateForm = () => {
  const { createPost } = usePostsData();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    []
  );

  const handleContentChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(event.target.value);
    },
    []
  );

  const handlePostCreateFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      createPost({
        createPostDto: {
          title,
          content
        }
      });
      setTitle("");
      setContent("");
    },
    [createPost, title, content]
  );

  return {
    title,
    handleTitleChange,
    content,
    handleContentChange,
    handlePostCreateFormSubmit
  };
};
