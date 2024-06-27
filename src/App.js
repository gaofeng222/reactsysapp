import "./App.css";
import { useEffect, useState, createContext, useContext } from "react";

const MsgContext = createContext();

function A() {
  return (
    <div>
      this is a component
      <B />
    </div>
  );
}
function B() {
  const userInfo = useContext(MsgContext);
  return (
    <div>
      this is B component
      <h4>
        {userInfo.name}
        {userInfo.age}
        {userInfo.sex}
      </h4>
    </div>
  );
}

function App() {
  const userInfo = {
    name: "zhaoxi",
    age: 18,
    sex: "male",
  };
  return (
    <div className="App">
      <MsgContext.Provider value={userInfo}>
        this is APP
        <A />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
