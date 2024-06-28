import { createBrowserRouter } from "react-router-dom";
import Article from "../pages/Article";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article/:id/:title",
    element: <Article />,
  },
]);

export default router;
