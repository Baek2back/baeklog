import { useBoolean } from "@/shared/hooks";

export const usePostCreatePanel = () => {
  const [isCreateStatus, { toggle: toggleCreateStatus }] = useBoolean(false);

  return { isCreateStatus, toggleCreateStatus };
};
