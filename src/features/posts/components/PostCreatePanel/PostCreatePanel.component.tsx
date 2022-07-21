import { MdAdd } from "react-icons/md";
import { PostCreateForm } from "../PostCreateForm/PostCreateForm.component";
import { usePostCreatePanel } from "./PostCreatePanel.hook";
import clsx from "clsx";

export const PostCreatePanel = () => {
  const { isCreateStatus, toggleCreateStatus } = usePostCreatePanel();

  return (
    <>
      {isCreateStatus && <PostCreateForm />}
      <button
        onClick={toggleCreateStatus}
        className={clsx(
          "absolute left-1/2 bottom-0 z-10 flex h-20 w-20 -translate-x-2/4 translate-y-2/4 items-center justify-center rounded-full bg-[#38d9a9] text-6xl text-white transition-all ease-in hover:bg-[#63e6be] active:bg-[#20c997]",
          isCreateStatus &&
            "rotate-45 bg-[#ff6b6b] hover:bg-[#ff8787] active:bg-[#fa5252]"
        )}
      >
        <MdAdd />
      </button>
    </>
  );
};
