import { put, takeEvery, takeLatest, call, delay } from "redux-saga/effects";
import axios from "axios";

export function* sagaIncrement() {
  yield takeLatest("SAGA_INCREMENT", onSagaIncrement);
}

function* onSagaIncrement(action) {
  // yield delay(1000);
  const response = yield call(() => {
    return getUserAccount();
  });

  console.log("response: ", response);
  yield put({ type: "SAGA_INCREMENT_RESPONSE" });
}

export function* sagaChange() {
  yield takeLatest("SAGA_CHANGE", onSagaChange);
}

function* onSagaChange(action) {
  let timeout = 1000;
  if (action && action.val === "3") {
    timeout = 5000;
  }
  const response = yield call(getUserAccount);
  console.log("Change Response: ", response);
}

const getUserAccount = (timeout = 1000, val = 0) => {
  return axios
    .get(
      `http://www.mocky.io/v2/5ecaf2c53000009300ddd465?mocky-delay=${timeout}ms`,
      { data: val }
    )
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      // console.log(error);
      return error;
    });
};
