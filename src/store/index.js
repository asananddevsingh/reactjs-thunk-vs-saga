import { combineReducers } from "redux";
import thunkReducer from "./thunk/thunkReducer";
import sagaReducer from "./saga/sagaReducer";

const rootReducer = combineReducers({
  thunk: thunkReducer,
  saga: sagaReducer,
});

export default rootReducer;
