import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PostsRoutes } from "@/routes/posts";
import { AppLayout } from "@/components/layout";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { history } from "@/store";

const App = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export const AppRoutes = () => {
  return (
    <Router history={history}>
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
