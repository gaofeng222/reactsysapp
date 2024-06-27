import "./App.css";
import { useState } from "react";
import { useToggleShow } from "./hooks/useToggleShow";

function Demo1() {
  return <h3>demo1 comp.</h3>;
}

function App() {
  const [show, toggle] = useToggleShow(false);
  const changeShow = () => {
    toggle(true);
  };
  return (
    <div className="App">
      {show && <Demo1 />}
      <button onClick={changeShow}>change comp.</button>
    </div>
  );
}

export default App;
