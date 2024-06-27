import "./App.css";

function Button(props) {
  const { text } = props;
  return <button>{text}</button>;
}

function App() {
  return (
    <div className="App">
      <div>
        <Button text={"这是一个点击测试"} />
      </div>
    </div>
  );
}

export default App;
