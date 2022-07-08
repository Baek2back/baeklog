import { PostPage, PostsPage } from "@/pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const PostsRoutes = () => {
  return (
    <Routes>
      <Route index element={<PostsPage />} />
      <Route path=":postId" element={<PostPage />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
