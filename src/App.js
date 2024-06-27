import "./App.css";
import { useEffect, useState } from "react";
import { getUserInfo } from "./api";

function Demo1() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("demo1");
    }, 1000);
    return () => {
      console.log("demo1 unmount");
      clearInterval(id);
    };
  }, []);
  return <h3>demo1 comp.</h3>;
}
function Demo2() {
  return <h3>demo2 comp.</h3>;
}

function App() {
  const [isShow, setIsShow] = useState(true);
  const changeShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="App">
      <h1>Hello World~~ useEffect</h1>
      {isShow ? <Demo1 /> : <Demo2 />}
      <button onClick={changeShow}>change comp.</button>
    </div>
  );
}

export default App;
