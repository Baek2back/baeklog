import { useCallback, useEffect, useState } from "react";
import { usePostsData } from "@/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { useBoolean } from "@/shared/hooks";

export const usePostView = () => {
  const [isEditStatus, { toggle: toggleEditStatus }] = useBoolean(false);
  const { postLoading, post, getPostById, deletePost, editPost } =
    usePostsData();

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

  const { postId } = useParams();

  const navigate = useNavigate();

  const handleCloseButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      navigate("posts");
    },
    [navigate]
  );

  useEffect(() => {
    if (!postId) return;
    getPostById({ id: postId });
  }, [getPostById, postId]);

  const handleDeleteButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      deletePost({
        id: postId!
      });
    },
    [postId, deletePost]
  );

  const handleSaveButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      editPost(
        {
          id: postId!,
          updatePostDto: {
            title,
            content
          }
        },
        {
          onSuccess: () => {
            toggleEditStatus();
          }
        }
      );
    },
    [title, content, postId, editPost, toggleEditStatus]
  );

  return {
    isEditStatus,
    toggleEditStatus,
    handleCloseButtonClick,
    handleDeleteButtonClick,
    handleSaveButtonClick,
    handleTitleChange,
    handleContentChange,
    postLoading,
    post,
    title,
    content
  };
};
