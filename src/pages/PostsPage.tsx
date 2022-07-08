import { BoardLayout } from "@/components/layout";
import { PostsView } from "@/features/posts/components/PostsView/PostsView.component";

export const PostsPage = () => {
  return (
    <BoardLayout>
      <PostsView />
    </BoardLayout>
  );
};
