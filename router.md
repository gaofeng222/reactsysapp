## react18 里面的路由技巧

react18 版本中，路由的用法发生了变化，react18 版本中，路由由 react-router-dom 包提供。使用 react-router-dom 包，我们可以轻松实现路由跳转。与 react-router 包不同的是，react-router-dom 包提供了 createBrowserRouter 方法，该方法可以创建路由对象。
总之，react-router6.x 版本的用法越来越接近 vue3.x 版本,互相借鉴互相学习，vue 抄 react 的 hooks,react 抄 vue 的 router 使用方式。

### 1. 安装依赖

```bash
npm install react-router-dom --save
```

### 2. 创建路由组件

在根目录下面创建 router 文件夹，在 router 文件夹下面创建 index.js 文件

```js
import { createBrowserRouter } from "react-router-dom";
import Article from "../pages/Article";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article",
    element: <Article />,
  },
]);

export default router;
```

### 3. 在 App.js 中引入路由

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* {" 注册store "} */}

      <RouterProvider router={router}>
        {/* {"注册路由 "} */}
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

懂 vue 的同学可以看出，这里注册 store,路由，其实和 vue 的 store,路由注册是一样的。
都是在入口文件中关联。只是方式略有差别。

### 4. 在组件中使用

1.路由传参的用法，第一种方式，查询参数和 vue 传参的用法基本一致。查询参数拼接在 url 后面，params 参数拼接在 url 后面。

```js
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // 编程式导航
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate(`/article?id=${item.id}&title=${item.title}`);
  };
  // 构造一个文章列表json
  const articles = [
    {
      id: 1,
      title: "React",
    },
    {
      id: 2,
      title: "Vue",
    },
    {
      id: 3,
      title: "Angular",
    },
    {
      id: 4,
      title: "Flutter",
    },
  ];
  const renderList = () => {
    return articles.map((item) => {
      return (
        <div key={item.id}>
          <p>
            <span>{item.title}</span>
            <button onClick={() => handleNavigate(item)}>跳转</button>
          </p>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Login</h1>
      {/* 声明式写法 */}
      <Link to="/article">文章页</Link>
      <div>{renderList(articles)}</div>
    </div>
  );
};

export default Login;
```

### 5. 路由传参

目标页面接受参数，并渲染。

```js
import { useSearchParams, useParams } from "react-router-dom";

const Article = () => {
  //获取路由参数
  const [params] = useSearchParams();
  console.log("🚀 ~ Article ~ useSearchParams():", params);
  const id = params.get("id");
  const title = params.get("title");

  return (
    <div>
      <h1>Article</h1>
      <div>
        <p>{id}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Article;
```

2.路由传参的第二种方式，params 参数拼接在 url 后面。路径参数，在路由中声明。

```js
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article/:id/:title", // 路径参数,此处必须声明
    element: <Article />,
  },
]);
```

跳转页面方法更改

```js
const handleNavigate = (item) => {
  navigate(`/article/${item.id}/${item.title}`);
};
```

目标页面接受参数，并渲染。

```js
import { useSearchParams, useParams } from "react-router-dom";

const Article = () => {
  //路由参数
  const params = useParams();
  const id = params.id;
  const title = params.title;
  console.log("🚀 ~ Article ~ title:", title);

  return (
    <div>
      <h1>Article</h1>
      <div>
        <p>{id}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Article;
```

这样就实现了基础的路由跳转与传参
