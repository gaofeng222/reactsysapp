import "./index.scss";
import { Swiper, Toast, SearchBar, NavBar } from "antd-mobile";
function About() {
  //提示几张美女图片的url

  const items = [
    "https://images.pexels.com/photos/24407569/pexels-photo-24407569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/25185163/pexels-photo-25185163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3238764/pexels-photo-3238764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ].map((item, index) => {
    return (
      <Swiper.Item key={index}>
        <img src={item} alt="" width="100%" height="200px" />
      </Swiper.Item>
    );
  });
  return (
    <div className="about-container">
      <NavBar back={null}>{"首页"}</NavBar>
      <div className="search-bar">
        <SearchBar
          style={{ "--height": "45px" }}
          placeholder="请输入要搜索的内容"
          showCancelButton
        />
      </div>
      <div className="about-container__swiper">
        <Swiper
          loop
          autoplay
          onIndexChange={(i) => {
            console.log(i, "onIndexChange1");
          }}
        >
          {items}
        </Swiper>
      </div>
      <div className="about-container__main"></div>
    </div>
  );
}

export default About;
