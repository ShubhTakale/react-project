import { LOGIN_CONSTANTS } from "redux/actions/loginActions/actionTypes";
import { doLogin } from "apis/loginApi";
import { call, put, takeEvery } from "redux-saga/effects";

function* doUserLogin(action) {
  try {
    const response = yield call(doLogin, action.payload);
    sessionStorage.setItem("user_data", JSON.stringify(response.data));
    yield put({
      type: LOGIN_CONSTANTS.LOGIN_SUCCESS,
      payload: { user_data: response.data },
    });
  } catch (e) {
    yield put({
      type: LOGIN_CONSTANTS.LOGIN_ERROR,
      payload: { error: e.message },
    });
  }
}

export function* doLoginSaga() {
  yield takeEvery(LOGIN_CONSTANTS.LOGIN_REQUEST, doUserLogin);
}
