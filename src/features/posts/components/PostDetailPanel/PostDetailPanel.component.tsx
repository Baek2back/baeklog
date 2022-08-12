import { MdClose } from "react-icons/md";

import { IconButton } from "@/components";
import { clsxm } from "@/lib";
import { NextLink } from "@/shared/components";

import { usePostDetailPanel } from "./PostDetailPanel.hook";

interface PostDetailPanelProps {
  toggleEditStatus: () => void;
}

export const PostDetailPanel = ({ toggleEditStatus }: PostDetailPanelProps) => {
  const { post, handleDeleteButtonClick } = usePostDetailPanel();
  return (
    <div className={clsxm("flex flex-1 flex-col")}>
      <header
        className={clsxm(
          "flex items-center justify-between border-b border-[#e9ecef] px-8 pt-12 pb-6"
        )}
      >
        <h1 className={clsxm("truncate text-4xl text-[#343a40]")}>
          {post.title}
        </h1>
        <NextLink href={"/posts"} passHref>
          <IconButton icon={<MdClose />} />
        </NextLink>
      </header>
      <main className={clsxm("overflow-y-auto px-8 py-5")}>
        <p>{post.content}</p>
        <div
          className={clsxm(
            "absolute bottom-0 left-0 flex h-12 w-full items-center justify-between"
          )}
        >
          <DetailButtonGroup
            handleEditButtonClick={toggleEditStatus}
            handleDeleteButtonClick={handleDeleteButtonClick}
          />
        </div>
      </main>
    </div>
  );
};

interface DetailButtonGroupProps {
  handleEditButtonClick: () => void;
  handleDeleteButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DetailButtonGroup = ({
  handleDeleteButtonClick,
  handleEditButtonClick
}: DetailButtonGroupProps) => {
  return (
    <div className={clsxm("flex flex-1 items-center justify-center gap-4")}>
      <button
        onClick={handleEditButtonClick}
        className={clsxm("h-9 bg-[#38d9a9] px-4 text-xl font-bold text-white")}
      >
        수정하기
      </button>
      <button
        onClick={handleDeleteButtonClick}
        className={clsxm(" h-9 bg-[#ff6b6b] px-4 text-xl font-bold text-white")}
      >
        삭제하기
      </button>
    </div>
  );
};
