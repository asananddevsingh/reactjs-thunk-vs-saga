const initialState = {
  counter: 0,
};

const thunkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THUNK_INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export default thunkReducer;
