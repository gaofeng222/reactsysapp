//生成react二级路由
import { Outlet, Link, Navigate } from "react-router-dom";
import { Button } from "antd-mobile";
import GTabbar from "@/compos/GTabbar/index";
import Login from "@/pages/Login";
import { useSelector } from "react-redux";
import "./index.scss";

const Layout = () => {
  const { token, isLoggedIn } = useSelector((state) => state.userReducers);
  return (
    <div className="layout">
      {!isLoggedIn ? (
        // <Login />
        <Navigate to="/login" />
      ) : (
        <>
          <Outlet />
          <GTabbar />
        </>
      )}
    </div>
  );
};

export default Layout;
