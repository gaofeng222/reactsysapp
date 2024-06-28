import { createSlice } from "@reduxjs/toolkit";
import { Dialog } from "antd-mobile";

const store = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    token: JSON.parse(localStorage.getItem("user")) || null,
    user: {},
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = action.payload;
      localStorage.setItem("isLoggedIn", action.payload);
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify({ name: action.payload }));
    },
  },
});

const reducer = store.reducer;

const { login, logout, setToken, setUser } = store.actions;

function fetchLogin(loginData) {
  return async (dispatch) => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (loginData.name === "admin" && loginData.password === "123456") {
          resolve({ data: { isLoggedIn: true } });
        } else {
          resolve({
            data: { isLoggedIn: false },
            error: { message: "账号或密码错误" },
          });
        }
      }, 3000);
    });
    return response;
  };
}
export { fetchLogin, logout, setToken, setUser, login };
export default reducer;
