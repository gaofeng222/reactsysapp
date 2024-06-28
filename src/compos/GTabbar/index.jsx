import { useState, useEffect } from "react";
import { NavBar, TabBar } from "antd-mobile";
import "./index.scss";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

const Bottom = () => {
  const [pathname, setPathname] = useState("/");
  const navigate = useNavigate();
  const navigation = useLocation();
  console.log("🚀 ~ Bottom ~ navigation:", navigation);
  const setRouteActive = (value) => {
    console.log("🚀 ~ setRouteActive ~ value:", value);
    setPathname(value);
    navigate(value);
  };

  useEffect(() => {
    setPathname(navigation.pathname);
    return () => {};
  }, [useLocation]);

  const tabs = [
    {
      key: "/",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/todo",
      title: "待办",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/message",
      title: "消息",
      icon: <MessageOutline />,
    },
    {
      key: "/me",
      title: "我的",
      icon: <UserOutline />,
    },
  ];

  return (
    <TabBar
      className="nav-tabbar"
      activeKey={pathname}
      onChange={(value) => setRouteActive(value)}
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default Bottom;
