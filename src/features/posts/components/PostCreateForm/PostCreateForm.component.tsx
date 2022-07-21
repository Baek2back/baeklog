import { TitleInput, ContentTextarea } from "@/components";
import { usePostCreateForm } from "./PostCreateForm.hook";

export const PostCreateForm = () => {
  const {
    handlePostCreateFormSubmit,
    title,
    content,
    handleTitleChange,
    handleContentChange
  } = usePostCreateForm();

  return (
    <div className="absolute left-0 bottom-0 w-full">
      <form
        onSubmit={handlePostCreateFormSubmit}
        className="flex flex-col gap-2 rounded-b-2xl border-t border-[#e9ecef] bg-[#f8f9fa] px-8 pt-8 pb-20"
      >
        <TitleInput
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력해주세요"
        />
        <ContentTextarea
          value={content}
          onChange={handleContentChange}
          placeholder="내용을 입력해주세요"
        />
      </form>
    </div>
  );
};
