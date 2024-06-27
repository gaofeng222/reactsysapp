function JsxDemo2() {
  const count = 10;
  const getName = () => {
    return "xiaoming";
  };
  const renderList = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(<li key={i}>{i}</li>);
    }
    return arr;
  };
  // const handleClick = (e) => {
  //   console.log("click", e);
  // };
  const handleClick = (e, name) => {
    console.log("🚀 ~ handleClick ~ name:", name);
    console.log("click", e);
  };
  return (
    <div className="App">
      <p>{"this is jsx2"}</p>
      <p>{count}</p>
      <p>{getName()}</p>
      <p>{new Date().getDate()}</p>

      <div style={{ color: "red" }}>this is a test</div>
      {/* 实现列表渲染 */}
      <ul>{renderList(5)}</ul>

      {/* 实现条件渲染 */}
      <div>{count > 10 ? <p>{"this is a test"}</p> : null}</div>

      {/* 实现复杂条件渲染 */}
      <div>
        {count > 10 ? (
          <p>{"this is a test"}</p>
        ) : count > 5 ? (
          <span>this is a span</span>
        ) : null}
      </div>

      <button onClick={(e) => handleClick(e, "tom")}>click me</button>
    </div>
  );
}

export default JsxDemo2;
