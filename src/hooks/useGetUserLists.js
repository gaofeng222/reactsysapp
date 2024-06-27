import { useState, useEffect } from "react";

export const useGetUserListsById = (id) => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${id}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setLists(data);
      });
  }, []);
  return lists;
};

export const useGetUserLists = () => {
  const [userList, setUserList] = useState([]);
  console.log(1);
  useEffect(() => {
    console.log(2);
    //获取接口数据
    const getUserLists = async () => {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      setUserList(data);
    };
    getUserLists();
  }, []);
  console.log(3);
  return [userList, setUserList];
};
