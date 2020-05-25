const initialState = {
  counter: 0,
};

const sagaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAGA_INCREMENT_RESPONSE":
      return {
        ...state,
        counter: state.counter + 1,
        prevCount: action.prevCount,
      };
    default:
      return state;
  }
};

export default sagaReducer;
