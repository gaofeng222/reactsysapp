import "./App.css";
import { useEffect, useState } from "react";
import { getUserInfo } from "./api";

function App() {
  console.log("aa");
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const getUserInfoData = async () => {
      const res = await getUserInfo();
      console.log(res);
      setUserInfo(res);
    };
    getUserInfoData();
    return () => {
      console.log("cc");
    };
  });
  return (
    <div className="App">
      <h1>Hello World~~ useEffect</h1>
      <ul>
        <li>{userInfo?.name}</li>
        <li>{userInfo?.age}</li>
      </ul>
    </div>
  );
}

export default App;
