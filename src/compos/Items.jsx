const Items = ({ item }) => {
  return (
    <li>
      <img className="user-avatar" width="50px" src={item.avatar_url} alt="" />
      {item.login}
    </li>
  );
};
export default Items;
