import { ClipLoader } from "react-spinners";
import * as S from "./Spinner.style";

export const Spinner = () => {
  return (
    <S.Spinner>
      <ClipLoader color="#38d9a9" />
    </S.Spinner>
  );
};
