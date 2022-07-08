import { IconButton } from "@/components/common";
import { MdClose } from "react-icons/md";
import { usePostView } from "./PostView.hook";
import { TitleInput, ContentTextarea } from "@/components/common";
import * as S from "./PostView.style";
import React from "react";

interface ButtonGroupProps {
  toggleEditStatus: () => void;
}

interface DefaultButtonGroupProps extends ButtonGroupProps {
  handleDeleteButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DefaultButtonGroup = ({
  handleDeleteButtonClick,
  toggleEditStatus
}: DefaultButtonGroupProps) => {
  return (
    <S.ButtonGroup>
      <S.Button variant="primary" onClick={toggleEditStatus}>
        수정하기
      </S.Button>
      <S.Button variant="warning" onClick={handleDeleteButtonClick}>
        삭제하기
      </S.Button>
    </S.ButtonGroup>
  );
};

interface OnEditingButtonGroupProps extends ButtonGroupProps {
  handleSaveButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const OnEditingButtonGroup = ({
  toggleEditStatus,
  handleSaveButtonClick
}: OnEditingButtonGroupProps) => {
  return (
    <S.ButtonGroup>
      <S.Button variant="primary" onClick={handleSaveButtonClick}>
        저장하기
      </S.Button>
      <S.Button variant="warning" onClick={toggleEditStatus}>
        취소하기
      </S.Button>
    </S.ButtonGroup>
  );
};

export const PostView = () => {
  const {
    isEditStatus,
    toggleEditStatus,
    handleCloseButtonClick,
    handleDeleteButtonClick,
    handleSaveButtonClick,
    postLoading,
    post,
    title,
    handleTitleChange,
    content,
    handleContentChange
  } = usePostView();

  return (
    <S.PostView>
      <S.PostViewHeader>
        {isEditStatus ? (
          <TitleInput
            value={title}
            onChange={handleTitleChange}
            placeholder="제목을 입력해주세요"
          />
        ) : (
          <S.PostsViewTitle>{postLoading ? "" : post.title}</S.PostsViewTitle>
        )}
        {!isEditStatus && (
          <IconButton icon={<MdClose />} onClick={handleCloseButtonClick} />
        )}
      </S.PostViewHeader>
      <S.PostViewMain>
        <S.PostViewContent>
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
        </S.PostViewContent>
        <S.PostEditPanel>
          {!isEditStatus ? (
            <DefaultButtonGroup
              toggleEditStatus={toggleEditStatus}
              handleDeleteButtonClick={handleDeleteButtonClick}
            />
          ) : (
            <OnEditingButtonGroup
              toggleEditStatus={toggleEditStatus}
              handleSaveButtonClick={handleSaveButtonClick}
            />
          )}
        </S.PostEditPanel>
      </S.PostViewMain>
    </S.PostView>
  );
};
