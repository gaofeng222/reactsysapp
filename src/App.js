import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="App">
      <h2>{value}</h2>
      用户名：
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default App;
