import * as S from "./BoardLayout.style";

interface BoardLayoutProps {
  children: React.ReactNode;
}

export const BoardLayout = ({ children }: BoardLayoutProps) => {
  return <S.BoardLayout>{children}</S.BoardLayout>;
};
