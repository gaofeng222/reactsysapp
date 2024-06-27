import "./App.css";
import { useState, useEffect } from "react";
import "./style.css";
import store from "./store";

function App() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    store.dispatch({ type: "INCREMENT" });
  };
  const handleMinus = () => {
    store.dispatch({ type: "DECREMENT" });
  };

  store.subscribe(() => {
    console.log("store changed", store.getState());
    setCount(store.getState().count);
  });
  return (
    <div className="App">
      <button onClick={handleAdd}>add</button> {count}
      <button onClick={handleMinus}>minus</button>
    </div>
  );
}

export default App;
