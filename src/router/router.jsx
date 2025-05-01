import { createBrowserRouter } from "react-router";
import App from "../App";
import LoginPage from "../pages/loginPage";
import ForgetPage from "../pages/forgetPage";
import PageNotFound from "../pages/pageNotFound";
import Dashboard from "../pages/Dashboard";
import DashBoardArticle from "../components/DashBoardArticle";
import AdminRoute from "./AdminRouter";
import DashBoardCareer from "../components/DashBoardCareer";
import DashBoardUserManagement from "../components/DashBoardUserManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/forget", element: <ForgetPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "article",
        element: (
          <AdminRoute>
            <DashBoardArticle />
          </AdminRoute>
        ),
      },
      {
        path: "career",
        element: (
          <AdminRoute>
            <DashBoardCareer />
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
           <DashBoardUserManagement/>
          </AdminRoute>
        ),
      },
      { path: "profile", element: <div>Profile</div> },
      { path: "blog", element: <div>Profile</div> },
      { path: "users", element: <div>Profile</div> },
      { path: "setting", element: <div>Profile</div> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

export default router;
