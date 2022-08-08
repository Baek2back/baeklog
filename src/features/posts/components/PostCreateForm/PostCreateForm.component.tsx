import { Input, Textarea } from "@/components";
import { clsxm } from "@/lib";

import { usePostCreateForm } from "./PostCreateForm.hook";

export const PostCreateForm = () => {
  const {
    handleSubmit,
    title,
    content,
    handleTitleChange,
    handleContentChange
  } = usePostCreateForm();

  return (
    <div className={clsxm("absolute left-0 bottom-0 w-full")}>
      <form
        onSubmit={handleSubmit}
        className={clsxm(
          "flex flex-col gap-2 rounded-b-2xl border-t border-[#e9ecef] bg-[#f8f9fa] px-8 pt-8 pb-20"
        )}
      >
        <Input
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력해주세요"
        />
        <Textarea
          value={content}
          onChange={handleContentChange}
          placeholder="내용을 입력해주세요"
        />
      </form>
    </div>
  );
};
