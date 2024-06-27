import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const [form, setFrom] = useState({ name: "张三", age: 18 });
  const handleClick = () => {
    const nums = ++count;
    setCount(nums);
  };
  const handleChangeName = () => {
    setFrom({
      ...form,
      name: "李四",
    });
  };
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <div>
        <h2>
          {form.name}---{form.age}
        </h2>
        <button onClick={handleChangeName}>change name</button>
      </div>
    </div>
  );
}

export default App;
