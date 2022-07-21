import { IconButton, Spinner } from "@/components";
import { MdRefresh } from "react-icons/md";
import { PostCreatePanel } from "@/features/posts/components/PostCreatePanel/PostCreatePanel.component";
import { PostList } from "@/features/posts/components/PostList/PostList.component";
import { usePostsPage } from "./PostsPage.hook";
import { isEmpty } from "@/shared/utils/assertion";
import { observer } from "mobx-react-lite";

export const PostsPage = observer(() => {
  const { postsLoading, posts, handleRefreshButtonClick } = usePostsPage();
  return (
    <>
      <header className="flex items-center justify-between border-b border-b-[#e9ecef] px-9 pt-12 pb-6">
        <h1 className="text-4xl text-[#343a40]">Baeklog 👋</h1>
        <IconButton icon={<MdRefresh />} onClick={handleRefreshButtonClick} />
      </header>
      <main className="flex-1 overflow-y-hidden px-8 pb-12 pt-5">
        {postsLoading ? (
          <Spinner />
        ) : isEmpty(posts) ? (
          "게시글이 없습니다."
        ) : (
          <PostList posts={posts} />
        )}
        <PostCreatePanel />
      </main>
    </>
  );
});
