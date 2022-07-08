import { useNavigate } from "react-router-dom";

export const usePostItem = () => {
  const navigate = useNavigate();

  const handleShowDetailButtonClick = (id: string) => {
    navigate(id);
  };

  return { handleShowDetailButtonClick };
};
