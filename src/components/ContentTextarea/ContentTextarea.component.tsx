import { useContentTextarea } from "./ContentTextarea.hook";

interface ContentTextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const ContentTextarea = (props: ContentTextareaProps) => {
  const { textareaRef, handleResizeHeight } = useContentTextarea();
  return (
    <textarea
      {...props}
      onInput={handleResizeHeight}
      ref={textareaRef}
      className="w-full resize-none rounded border border-[#dee2e6] p-3"
    />
  );
};
