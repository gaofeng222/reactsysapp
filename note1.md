## react18 中使用@reduxjs/toolkit

### 1.安装依赖包

```bash
yarn add @reduxjs/toolkit react-redux
```

### 2.创建 store

根目录下面创建 store 文件夹，然后创建 index.js 文件。

```js
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter";
import counterReducers from "./modules/counterStore";
import channelReducers from "./modules/channelStore";

export const store = configureStore({
  reducer: {
    counterReducers,
    channelReducers,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();
    return [...middlewares /* ... */];
  },
});

export default store;
```

### 3.创建模块

在 store 文件夹下面创建 modules 文件夹，然后创建 counterStore.js 和 channelStore.js 文件。

```js
import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
  },
  reducers: {
    increase(state) {
      state.count += 1;
    },
    decrease(state) {
      state.count -= 1;
    },
    addToNum(state, action) {
      state.count += action.payload;
    },
  },
});

const { increase, decrease, addToNum } = counterStore.actions;
const reducer = counterStore.reducer;
//导出给组件使用
export { increase, decrease, addToNum };
//导出reducer,给store使用
export default reducer;
```

```js
import { createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "channel",
  initialState: {
    channelLists: [
      {
        id: 1,
        name: "React",
      },
    ],
  },
  reducers: {
    setChannels(state, action) {
      //下拉分页时，追加数据
      // state.channelLists = [...state.channelLists, ...action.payload];
      //上拉刷新时，替换数据
      state.channelLists = action.payload;
    },
  },
});

const { setChannels } = store.actions;
const reducer1 = store.reducer;

//异步请求
const fetchChannel = () => {
  //返回一个新函数
  return async (dispatch) => {
    //封装异步请求
    const response = await fetch("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    const data = await response.json();
    //派发action，触发同步的reducer
    dispatch(setChannels(data));
  };
};
//导出给组件使用
export { setChannels, fetchChannel };
//导出reducer,给store使用
export default reducer1;
```

@reduxjs/toolkit 思路有点类似与 vuex，但是 vuex 是 vue 的插件，而@reduxjs/toolkit 是 react 的库。

### 4.使用 store

在全局组件中引入 store，然后使用 Provider 包裹。

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
```

### 5.使用组件

在组件中引入 store，然后使用 useSelector 获取数据。

```js
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
  //组件加载时，自动触发一次请求
  // useEffect(() => {
  //   dispatch(fetchChannel());
  // }, [dispatch]);

  //点击按钮时加载数据
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
```
