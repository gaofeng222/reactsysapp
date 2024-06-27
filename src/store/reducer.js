const initState = {
  count: 0,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });
    case "DECREMENT":
      return Object.assign({}, state, { count: state.count - 1 });
    case "RESET":
      return initState;
    default:
      return state;
  }
}

export default reducer;
