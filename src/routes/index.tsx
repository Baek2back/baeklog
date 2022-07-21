import {
  Navigate,
  Outlet,
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import { PostsRoutes } from "@/routes/posts";

const App = () => {
  return (
    <div className="relative mx-auto my-24 flex h-[768px] w-[512px] flex-col rounded-2xl bg-white shadow-lg">
      <Outlet />
    </div>
  );
};

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="posts" replace={true} />} />
          <Route path="posts/*" element={<PostsRoutes />} />
          <Route path="*" element={<Navigate to="." />} />
        </Route>
      </Routes>
    </Router>
  );
};
