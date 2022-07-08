import { MdAdd } from "react-icons/md";
import { PostCreateForm } from "../PostCreateForm/PostCreateForm.component";
import { usePostCreatePanel } from "./PostCreatePanel.hook";
import * as S from "./PostCreatePanel.style";

export const PostCreatePanel = () => {
  const { isCreateStatus, toggleCreateStatus } = usePostCreatePanel();

  return (
    <>
      {isCreateStatus && <PostCreateForm />}
      <S.CircleButton
        onClick={toggleCreateStatus}
        isCreateStatus={isCreateStatus}
      >
        <MdAdd />
      </S.CircleButton>
    </>
  );
};
