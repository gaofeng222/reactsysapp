import { createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "channel",
  initialState: {
    channelLists: [
      {
        id: 1,
        name: "React",
      },
    ],
  },
  reducers: {
    setChannels(state, action) {
      // state.channelLists = [...state.channelLists, ...action.payload];
      state.channelLists = action.payload;
    },
  },
});

const { setChannels } = store.actions;
const reducer1 = store.reducer;
//异步请求
const fetchChannel = () => {
  //返回一个新函数
  return async (dispatch) => {
    //封装异步请求
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    //派发action
    dispatch(setChannels(data));
  };
};
export { setChannels, fetchChannel };
export default reducer1;
