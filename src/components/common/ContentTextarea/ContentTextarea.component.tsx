import { useContentTextarea } from "./ContentTextarea.hook";
import * as S from "./ContentTextarea.style";

interface ContentTextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const ContentTextarea = (props: ContentTextareaProps) => {
  const { textareaRef, handleResizeHeight } = useContentTextarea();
  return (
    <S.ContentTextarea
      {...props}
      onInput={handleResizeHeight}
      ref={textareaRef}
    />
  );
};
