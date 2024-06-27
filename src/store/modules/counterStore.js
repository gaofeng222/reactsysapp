import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: {
    count: 10,
  },
  reducers: {
    increase(state) {
      state.count += 1;
    },
    decrease(state) {
      state.count -= 1;
    },
    addToNum(state, action) {
      state.count += action.payload;
    },
  },
});
const { increase, decrease, addToNum } = counterStore.actions;
const reducer = counterStore.reducer;

export { increase, decrease, addToNum };

export default reducer;
