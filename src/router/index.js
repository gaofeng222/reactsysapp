import { createBrowserRouter } from "react-router-dom";
import Article from "@/pages/Article";
import Login from "@/pages/Login";
import Layout from "@/layout/index";
import About from "@/pages/About";
import ArticleLists from "@/pages/ArticleLists";
import NotFound from "@/compos/NotFount";
import UserCenter from "@/pages/Mine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "", // 默认路由, 为空或者去掉path属性
        index: true,
        element: <About />,
      },
      {
        path: "/article-lists",
        element: <ArticleLists />,
      },
      {
        path: "/article/:id/:title",
        element: <Article />,
      },
      {
        path: "/me",
        element: <UserCenter />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />, // element: <h1>404 Not Found</h1>,
  },
]);

export default router;
