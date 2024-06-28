import "./index.scss";
function About() {
  return (
    <div className="about-container">
      <h1 className="title">About</h1>
      <p className="subTitle">This is the About page.</p>
      <div>
        {/* 请生成一段描述文字 */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          nibh ut est tincidunt, quis aliquam arcu convallis. Nunc euismod
          consectetur nunc, et bibendum ante suscipit eget. Morbi dictum vitae
          erat in porta. Sed id justo lacinia, mattis felis at, molestie mauris.
          Duis tempor, neque sed placerat blandit, purus metus dignissim sapien,
          et pretium nulla magna vel libero. In hac habitasse platea dictumst.
          Nullam accumsan lorem non odio sagittis, ac facilisis nibh imperdiet.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Quisque pellentesque velit nec risus lobortis,
          nec ornare enim eleifend.
        </p>
      </div>
    </div>
  );
}

export default About;
