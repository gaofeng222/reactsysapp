import "./App.css";
import { useEffect, useState } from "react";

function Son1(props) {
  const { children, getName, name } = props;
  const title = "this is son1";
  const handleClick = (e) => {
    console.log(e);
    getName(title);
  };
  return (
    <>
      <h3>{name}</h3>
      {children}
      <button onClick={handleClick}>按钮</button>
    </>
  );
}
function Son2(props) {
  const { name } = props;
  return <h4>son2组件--{name}</h4>;
}

function App() {
  const [name, setName] = useState("这是一个标题");
  const getName = (name) => {
    console.log("getName", name);
    setName(name);
  };
  return (
    <div className="App">
      <Son1 name={name} getName={getName}>
        <h2>这是外面传进来的文本</h2>
      </Son1>
      <Son2 name={name}></Son2>
    </div>
  );
}

export default App;
