import { useCallback, useRef } from "react";

const BORDER_HEIGHT = 2;

export const useContentTextarea = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + BORDER_HEIGHT + "px";
  }, [textareaRef]);

  return {
    textareaRef,
    handleResizeHeight
  };
};
