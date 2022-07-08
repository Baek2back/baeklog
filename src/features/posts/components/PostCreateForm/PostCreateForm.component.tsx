import { TitleInput, ContentTextarea } from "@/components/common";
import { usePostCreateForm } from "./PostCreateForm.hook";
import * as S from "./PostCreateForm.style";

export const PostCreateForm = () => {
  const {
    handlePostCreateFormSubmit,
    title,
    content,
    handleTitleChange,
    handleContentChange
  } = usePostCreateForm();

  return (
    <S.PostCreateFormContainer>
      <S.PostCreateForm onSubmit={handlePostCreateFormSubmit}>
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
      </S.PostCreateForm>
    </S.PostCreateFormContainer>
  );
};
