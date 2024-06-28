import { useSearchParams, useParams } from "react-router-dom";

const Article = () => {
  //获取路由参数
  // const [params] = useSearchParams();
  // console.log("🚀 ~ Article ~ useSearchParams():", params);
  // const id = params.get("id");
  // const title = params.get("title");

  //路由参数
  const params = useParams();
  const id = params.id;
  const title = params.title;
  console.log("🚀 ~ Article ~ title:", title);

  return (
    <div>
      <h1>Article</h1>
      <div>
        <p>{id}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Article;
