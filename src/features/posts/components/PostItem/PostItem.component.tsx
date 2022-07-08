import { MdArrowForwardIos } from "react-icons/md";
import { usePostItem } from "./PostItem.hook";
import * as S from "./PostItem.style";
import type { Post } from "@/generated/models";

interface PostItemProps extends Post {}

export const PostItem = ({ id, title, content }: PostItemProps) => {
  const { handleShowDetailButtonClick } = usePostItem();

  return (
    <S.PostItemContainer>
      <S.PostSummary>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostContent>{content}</S.PostContent>
      </S.PostSummary>
      <S.ShowDetailButton>
        <MdArrowForwardIos onClick={() => handleShowDetailButtonClick(id)} />
      </S.ShowDetailButton>
    </S.PostItemContainer>
  );
};
