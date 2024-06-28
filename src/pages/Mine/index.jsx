import { List, Avatar, Toast, NavBar, Dialog } from "antd-mobile";
import { logout } from "../../store/modules/userStore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { sleep } from "../../utils/index";
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
} from "antd-mobile-icons";
import "./index.scss";
function UserCenter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducers);
  console.log("🚀 ~ UserCenter ~ user:", user);
  const demoAvatarImages =
    "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ";

  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(user?.name);
  });

  const back = () =>
    Toast.show({
      content: "点击了返回区域",
      duration: 1000,
    });
  const handleLogOut = () => {
    Dialog.confirm({
      content: "确认退出系统吗？",
      onConfirm: async () => {
        await sleep(3000);
        Toast.show({
          icon: "success",
          content: "退出成功",
          position: "bottom",
        });
        dispatch(logout());
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/", { replace: true });
      },
    });
  };

  return (
    <div className="user-container">
      <NavBar onBack={back} style={{ "--border-bottom": "red" }}>
        {"个人中心"}
      </NavBar>
      <div className="user-container__main">
        <div className="top-header">
          <Avatar src={demoAvatarImages} style={{ "--size": "60px" }} />
          <span>欢迎回来,{username}</span>
        </div>
        <List>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
            账单
          </List.Item>
          <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
            总资产
          </List.Item>
          <List.Item prefix={<SetOutline />} onClick={() => {}}>
            设置
          </List.Item>
          <List.Item prefix={<SetOutline />} onClick={handleLogOut}>
            退出
          </List.Item>
        </List>
      </div>
    </div>
  );
}
export default UserCenter;
