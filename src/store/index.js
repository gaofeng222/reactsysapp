import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./modules/counterStore";
import channelReducers from "./modules/channelStore";
import userReducers from "./modules/userStore";
const store = configureStore({
  reducer: {
    counterReducers,
    channelReducers,
    userReducers,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();
    return [...middlewares /* ... */];
  },
});

export default store;
