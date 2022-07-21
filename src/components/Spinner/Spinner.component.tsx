import { ClipLoader } from "react-spinners";

export const Spinner = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ClipLoader color="#38d9a9" />
    </div>
  );
};
