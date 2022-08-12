import { MdArrowForwardIos } from "react-icons/md";

import type { Post } from "@/generated/models";
import { clsxm } from "@/lib";
import { NextLink } from "@/shared/components";

interface PostItemProps extends Post {}

export const PostItem = ({ id, title, content }: PostItemProps) => {
  return (
    <li
      className={clsxm(
        "group flex items-center justify-between p-3 shadow-[0_10px_10px_-10px_rgba(33,35,38,0.1)]"
      )}
    >
      <div className={clsxm("flex flex-col gap-2")}>
        <h2 className={clsxm("text-2xl text-[#495057]")}>{title}</h2>
        <p className={clsxm("text-base")}>{content}</p>
      </div>
      <NextLink href={`/posts/${id}`} passHref>
        <button
          className={clsxm(
            "hidden h-6 w-6 items-center justify-between hover:text-[#ff6b6b] group-hover:flex"
          )}
        >
          <MdArrowForwardIos />
        </button>
      </NextLink>
    </li>
  );
};
