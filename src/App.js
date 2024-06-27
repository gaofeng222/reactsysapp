import "./App.css";
import { useState, useEffect } from "react";
import "./style.css";
import store from "./store";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, addToNum } from "./store/modules/counterStore";
import { fetchChannel } from "./store/modules/channelStore";

function App() {
  const { count } = useSelector((state) => state.counterReducers);
  const { channelLists } = useSelector((state) => state.channelReducers);
  console.log("🚀 ~ App ~ channelLists:", channelLists);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increase(5));
  };
  const handleMinus = () => {
    dispatch(decrease());
  };

  const handleAddTen = () => {
    dispatch(addToNum(10));
  };

  // useEffect(() => {
  //   dispatch(fetchChannel());
  // }, [dispatch]);

  const handleGetUserLists = () => {
    // dispatch({ type: "GET_USER_LISTS" });
    dispatch(fetchChannel());
  };

  const renderUserLists = () => {
    return channelLists?.map((item, index) => {
      return (
        <li key={index}>
          <img width="50px" src={item.avatar_url} />
          <span>{item.login}</span>
        </li>
      );
    });
  };

  return (
    <div className="App">
      <button onClick={handleAdd}>add</button>
      <button onClick={handleAddTen}>add 10</button> {count}
      <button onClick={handleMinus}>minus</button>
      <button onClick={handleGetUserLists}>获取用户列表</button>
      <ul>{renderUserLists()}</ul>
    </div>
  );
}

export default App;
