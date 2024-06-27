import "./App.css";
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

function App() {
  const [content, setContent] = useState("");
  const [commentList, setCommentList] = useState([
    {
      id: 1,
      content: "评论内容111",
    },
    {
      id: 2,
      content: "评论内容222",
    },
    {
      id: 3,
      content: "评论内容333",
    },
  ]);
  const inputRef = useRef();

  //渲染完之后才能获取生成的dom
  const showDom = () => {
    console.dir(inputRef.current);
  };
  const onSubmit = () => {
    setCommentList([
      ...commentList,
      {
        id: uuid(),
        content,
        ctime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      },
    ]);

    setContent("");
    inputRef.current.focus();
  };
  const handleChange = (e) => {
    console.log("🚀 ~ handleChange ~ e:", e.target.value);
    setContent(e.target.value);
  };
  const renderListContent = () => {
    return commentList.map((item) => {
      return (
        <li key={item}>
          {item.content} {item.ctime ? item.ctime : "-"}
        </li>
      );
    });
  };
  return (
    <div className="App">
      <textarea
        className="reply-box-textarea"
        placeholder="发一条评论"
        value={content}
        onChange={handleChange}
        ref={inputRef}
      />
      <button onClick={onSubmit}>发布</button>
      <ul>{renderListContent()}</ul>
    </div>
  );
}

export default App;
