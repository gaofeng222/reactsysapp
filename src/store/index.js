import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./modules/counterStore";
import channelReducers from "./modules/channelStore";
const store = configureStore({
  reducer: {
    counterReducers,
    channelReducers,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();
    return [...middlewares /* ... */];
  },
});

export default store;
