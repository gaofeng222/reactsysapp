//生成react二级路由
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/article-lists">article lists</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
