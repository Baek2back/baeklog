import { ClipLoader } from "react-spinners";

import { clsxm } from "@/lib";

export const Spinner = () => {
  return (
    <div className={clsxm("flex h-full w-full items-center justify-center")}>
      <ClipLoader color="#38d9a9" />
    </div>
  );
};
