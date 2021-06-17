const { doSignup } = require("apis/loginApi");
const { call, put, takeEvery } = require("redux-saga/effects");
const { SIGNUP_CONSTANTS } = require("redux/actions/signupActions/actionTypes");

function* doUserSignup(action) {
  console.log( action.payload);
  try {
    const response = yield call(doSignup, action.payload);
    yield put({
      type: SIGNUP_CONSTANTS.SIGNUP_SUCCESS,
      payload: { user_data: response.data },
    });
  } catch (e) {
    yield put({
      type: SIGNUP_CONSTANTS.SIGNUP_ERROR,
      payload: { error: e.message },
    });
  }
}

export function* doUserSignupSaga() {
  yield takeEvery(SIGNUP_CONSTANTS.SIGNUP_REQUEST, doUserSignup);
}
