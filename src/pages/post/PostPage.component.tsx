import { IconButton } from "@/components";
import { MdClose } from "react-icons/md";
import { TitleInput, ContentTextarea } from "@/components";
import React from "react";
import { usePostPage } from "./PostPage.hook";
import { observer } from "mobx-react-lite";

interface DefaultButtonGroupProps {
  handleEditButtonClick: () => void;
  handleDeleteButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DefaultButtonGroup = ({
  handleDeleteButtonClick,
  handleEditButtonClick
}: DefaultButtonGroupProps) => {
  return (
    <div className="flex flex-1 items-center justify-center gap-4">
      <button
        onClick={handleEditButtonClick}
        className="h-9 bg-[#38d9a9] px-4 text-xl font-bold text-white"
      >
        수정하기
      </button>
      <button
        onClick={handleDeleteButtonClick}
        className="h-9 bg-[#ff6b6b] px-4 text-xl font-bold text-white"
      >
        삭제하기
      </button>
    </div>
  );
};

interface OnEditingButtonGroupProps {
  handleSaveButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCancelButtonClick: () => void;
}

const OnEditingButtonGroup = ({
  handleCancelButtonClick,
  handleSaveButtonClick
}: OnEditingButtonGroupProps) => {
  return (
    <div className="flex flex-1 items-center justify-center gap-4">
      <button
        onClick={handleSaveButtonClick}
        className="h-9 bg-[#38d9a9] px-4 text-xl font-bold text-white"
      >
        저장하기
      </button>
      <button
        onClick={handleCancelButtonClick}
        className="h-9 bg-[#ff6b6b] px-4 text-xl font-bold text-white"
      >
        취소하기
      </button>
    </div>
  );
};

export const PostPage = observer(() => {
  const {
    isEditStatus,
    handleCloseButtonClick,
    handleDeleteButtonClick,
    handleSaveButtonClick,
    postLoading,
    post,
    title,
    handleTitleChange,
    content,
    handleContentChange,
    handleCancelButtonClick,
    handleEditButtonClick
  } = usePostPage();

  return (
    <form className="flex flex-1 flex-col">
      <header className="flex items-center justify-between border-b border-[#e9ecef] px-8 pt-12 pb-6">
        {isEditStatus ? (
          <TitleInput
            value={title}
            onChange={handleTitleChange}
            placeholder="제목을 입력해주세요"
          />
        ) : (
          <h1 className="truncate text-4xl text-[#343a40]">
            {postLoading ? "" : post.title}
          </h1>
        )}
        {!isEditStatus && (
          <IconButton icon={<MdClose />} onClick={handleCloseButtonClick} />
        )}
      </header>
      <main className="overflow-y-auto px-8 py-5">
        <p>
          {postLoading ? (
            ""
          ) : isEditStatus ? (
            <ContentTextarea
              value={content}
              onChange={handleContentChange}
              placeholder="내용을 입력해주세요"
            />
          ) : (
            post.content
          )}
        </p>
        <div className="absolute bottom-0 left-0 flex h-12 w-full items-center justify-between">
          {!isEditStatus ? (
            <DefaultButtonGroup
              handleEditButtonClick={handleEditButtonClick}
              handleDeleteButtonClick={handleDeleteButtonClick}
            />
          ) : (
            <OnEditingButtonGroup
              handleCancelButtonClick={handleCancelButtonClick}
              handleSaveButtonClick={handleSaveButtonClick}
            />
          )}
        </div>
      </main>
    </form>
  );
});
