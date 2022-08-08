import { Input, Textarea } from "@/components";
import { clsxm } from "@/lib";

import { usePostModifyForm } from "./PostModifyForm.hook";

interface PostModifyFormProps {
  toggleEditStatus: () => void;
}

export const PostModifyForm = ({ toggleEditStatus }: PostModifyFormProps) => {
  const {
    handleSubmit,
    handleTitleChange,
    handleContentChange,
    handleCancelButtonClick,
    title,
    content
  } = usePostModifyForm({ toggleEditStatus });
  return (
    <form className={clsxm("flex flex-1 flex-col")} onSubmit={handleSubmit}>
      <header
        className={clsxm(
          "flex items-center justify-between border-b border-[#e9ecef] px-8 pt-12 pb-6"
        )}
      >
        <Input
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력해주세요"
        />
      </header>
      <main className={clsxm("overflow-y-auto px-8 py-5")}>
        <p>
          <Textarea
            value={content}
            onChange={handleContentChange}
            placeholder="내용을 입력해주세요"
          />
        </p>
        <div
          className={clsxm(
            "absolute bottom-0 left-0 flex h-12 w-full items-center justify-between"
          )}
        >
          <div
            className={clsxm("flex flex-1 items-center justify-center gap-4")}
          >
            <button
              className={clsxm(
                "h-9 bg-[#38d9a9] px-4 text-xl font-bold text-white"
              )}
            >
              저장하기
            </button>
            <button
              onClick={handleCancelButtonClick}
              className={clsxm(
                "h-9 bg-[#ff6b6b] px-4 text-xl font-bold text-white"
              )}
            >
              취소하기
            </button>
          </div>
        </div>
      </main>
    </form>
  );
};
