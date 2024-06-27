function JsxDemo() {
  const title = <h1>这是一个标题</h1>;
  const isFlag = false;
  const content = (props) => {
    const desc = props.desc;
    return <h1>这是一个描述--{desc}</h1>;
  };
  return (
    <div className="App">
      hello world
      {isFlag ? title : content({ desc: "动态传入的内容" })}
    </div>
  );
}

export default JsxDemo;
