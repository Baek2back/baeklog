import { clsxm } from "@/lib";

import { useTextarea } from "./Textarea.hook";

interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const Textarea = (props: TextareaProps) => {
  const { textareaRef, handleResizeHeight } = useTextarea();
  return (
    <textarea
      {...props}
      onInput={handleResizeHeight}
      ref={textareaRef}
      className={clsxm(
        "w-full resize-none rounded border border-[#dee2e6] p-3"
      )}
    />
  );
};
