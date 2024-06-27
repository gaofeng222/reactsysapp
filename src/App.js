import "./App.css";
import { useState, useEffect } from "react";
import "./style.css";
import { useGetUserLists } from "./hooks/useGetUserLists";
import Items from "./compos/Items.jsx";

function App() {
  const [userList, setUserList] = useGetUserLists();
  const renderLists = () => {
    return userList.map((item, index) => {
      return <Items item={item} key={index} />;
    });
  };
  const handleClickAdd = () => {
    setUserList([
      ...userList,
      {
        login: "gaofeng",
        avatar_url: "https://avatars.githubusercontent.com/u/1026937?v=4",
      },
    ]);
  };
  return (
    <div className="App">
      <h2>用户列表</h2>
      <ul>{renderLists()}</ul>
      <button onClick={handleClickAdd}>add user</button>
    </div>
  );
}

export default App;
