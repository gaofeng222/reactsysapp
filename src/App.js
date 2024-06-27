import "./App.css";
import { useEffect, useState } from "react";

function Son(props) {
  const { name = "-", age, child, cb, children, onGetMsg } = props;
  useEffect(() => {
    cb && cb();
  }, []);
  const handleChangeParentTitle = () => {
    onGetMsg("this is a new title from son...");
  };
  return (
    <div>
      this is son,{name}-{age}-{child}
      {children}
      <div>
        <button onClick={handleChangeParentTitle}>改变父组件的title</button>
      </div>
    </div>
  );
}

function App() {
  const name = "Heimareact";
  const [title, setTitle] = useState("this is title from parent...");
  const onGetMsg = (msg) => {
    console.log(msg);
    setTitle(msg);
  };
  return (
    <div className="App">
      <h3>{title}</h3>
      <Son
        name={name}
        age={30}
        cb={() => console.log("abc")}
        child={<span>this is a span</span>}
        onGetMsg={onGetMsg}
      >
        <h2>这是外面传进来的文本</h2>
      </Son>
    </div>
  );
}

export default App;
