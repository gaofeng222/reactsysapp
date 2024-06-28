import { ErrorBlock } from "antd-mobile";
import { redirect, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.scss";
function NotFound() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const countId = setInterval(function () {
      console.log(count);
      if (count === 0) {
        navigate("/", { replace: true });
        clearInterval(countId);
      }
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(countId);
    };
  }, [navigate, count]);

  return (
    <div className="not-found-container">
      <ErrorBlock status="busy" />
      <div className="not-found-text">页面未找到,{count}s后跳转到首页</div>
    </div>
  );
}

export default NotFound;
