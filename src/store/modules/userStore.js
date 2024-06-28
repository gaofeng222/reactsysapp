import { createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    token: null,
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
      state.user = action;
    },
  },
});

const reducer = store.reducer;

const { login, logout, setToken, setUser } = store.actions;

export { login, logout, setToken, setUser };

export default reducer;
