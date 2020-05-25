import { all } from "redux-saga/effects";
import { sagaIncrement, sagaChange } from "./sagaActions";

function* rootSaga() {
  yield all([sagaIncrement(), sagaChange()]);
}

export default rootSaga;
