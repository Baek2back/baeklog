import { isEmpty } from "@/shared/utils/assertion";
import { useCallback, useEffect, useState } from "react";
import { usePostsData } from "@/features/posts/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { useBoolean } from "@/shared/hooks";

export const usePostPage = () => {
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

  const handleCancelButtonClick = useCallback(() => {
    setTitle(post.title);
    setContent(post.content);
    toggleEditStatus();
  }, [post.title, post.content, toggleEditStatus]);

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

  useEffect(() => {
    if (isEmpty(post)) return;
    setTitle(post.title);
    setContent(post.content);
  }, [post]);

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
        toggleEditStatus
      );
    },
    [title, content, postId, editPost, toggleEditStatus]
  );

  const handleEditButtonClick = useCallback(() => {
    toggleEditStatus();
  }, [toggleEditStatus]);

  return {
    isEditStatus,
    toggleEditStatus,
    handleCloseButtonClick,
    handleDeleteButtonClick,
    handleSaveButtonClick,
    handleTitleChange,
    handleContentChange,
    handleCancelButtonClick,
    handleEditButtonClick,
    postLoading,
    post,
    title,
    content
  };
};
