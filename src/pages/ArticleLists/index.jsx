import { useNavigate } from "react-router-dom";

function ArticleLists() {
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    // navigate(`/article?id=${item.id}&title=${item.title}`);
    navigate(`/article/${item.id}/${item.title}`);
  };
  // 构造一个文章列表json
  const articles = [
    {
      id: 1,
      title: "React",
    },
    {
      id: 2,
      title: "Vue",
    },
    {
      id: 3,
      title: "Angular",
    },
    {
      id: 4,
      title: "Flutter",
    },
  ];
  const renderList = () => {
    return articles.map((item) => {
      return (
        <div key={item.id}>
          <p>
            <span>{item.title}</span>
            <button onClick={() => handleNavigate(item)}>跳转</button>
          </p>
        </div>
      );
    });
  };
  return (
    <div>
      {/* 声明式写法 */}
      <div>{renderList(articles)}</div>
    </div>
  );
}

export default ArticleLists;
