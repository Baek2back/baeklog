import * as S from "./IconButton.style";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return <S.IconButton {...rest}>{icon}</S.IconButton>;
};
