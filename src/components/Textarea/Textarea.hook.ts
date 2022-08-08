import { useCallback, useRef } from "react";

import { isNotNullish } from "@/shared/utils/assertion";

const BORDER_HEIGHT = 2;

export const useTextarea = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    if (!isNotNullish(textareaRef.current)) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + BORDER_HEIGHT + "px";
  }, [textareaRef]);

  return {
    textareaRef,
    handleResizeHeight
  };
};
