import { createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    token: JSON.parse(localStorage.getItem("user")) || null,
    user: {},
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

const reducer = store.reducer;

const { login, logout, setToken, setUser } = store.actions;

export { login, logout, setToken, setUser };

export default reducer;
