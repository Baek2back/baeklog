import { MdArrowForwardIos } from "react-icons/md";
import { usePostItem } from "./PostItem.hook";
import type { Post } from "@/generated/models";

interface PostItemProps extends Post {}

export const PostItem = ({ id, title, content }: PostItemProps) => {
  const { handleShowDetailButtonClick } = usePostItem();

  return (
    <li className="group flex items-center justify-between p-3 shadow-[0_10px_10px_-10px_rgba(33,35,38,0.1)]">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-[#495057]">{title}</h2>
        <p className="text-base">{content}</p>
      </div>
      <button className="hidden h-6 w-6 items-center justify-between hover:text-[#ff6b6b] group-hover:flex">
        <MdArrowForwardIos onClick={() => handleShowDetailButtonClick(id)} />
      </button>
    </li>
  );
};
