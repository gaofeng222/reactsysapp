import "./App.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./style.css";

function App() {
  console.log("888");
  return (
    <div className="App">
      <h1>React Router</h1>
      <Outlet />
    </div>
  );
}

export default App;
