export const getUserInfo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Heima",
        age: 30,
      });
    }, 3000);
  });
};
