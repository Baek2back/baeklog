import * as S from "./TitleInput.style";

interface TitleInputPros
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const TitleInput = (props: TitleInputPros) => {
  return <S.TitleInput {...props} />;
};
