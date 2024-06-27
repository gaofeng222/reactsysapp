import "./App.css";
import { useState } from "react";
import "./style.css";
import _ from "lodash";
import classNames from "classnames";

function App() {
  const tabs = [
    {
      type: "hot",
      text: "最热",
    },
    {
      type: "new",
      text: "最新",
    },
  ];
  const [nowTab, setNowTab] = useState({
    type: "hot",
    text: "最热",
  });
  const handleChangeTab = (tab) => {
    setNowTab(tab);
  };
  const renderTab = (tabs) => {
    return tabs.map((tab, index) => {
      /* className={`nav-item ${nowTab.type === tab.type && "active"}`} */
      return (
        <span
          onClick={() => handleChangeTab(tab)}
          className={classNames(
            "nav-item",
            nowTab.type === tab.type && "active"
          )}
          key={index}
        >
          {tab.text} {index === tabs.length - 1 ? "" : " | "}
        </span>
      );
    });
  };
  return (
    <div className="App">
      <div>{renderTab(tabs)}</div>
      <div>
        {nowTab.type === "hot" ? (
          <div>
            <h1>最热</h1>
          </div>
        ) : (
          <div>
            <h1>最新</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
