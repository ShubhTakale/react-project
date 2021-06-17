import { call, put, takeEvery } from "redux-saga/effects";
import { getPostById } from "apis/postsApis";
import { DASHBOARD_CONSTANTS } from "redux/actions/dashboardActions/actionTypes";

function* fetchPostDetails(action) {
  try {
    const response = yield call(getPostById, action.payload.id);
    yield put({
      type: DASHBOARD_CONSTANTS.FETCH_POST_DETAILS_SUCCESS,
      payload: { post: response.data },
    });
  } catch (e) {
    yield put({
      type: DASHBOARD_CONSTANTS.FETCH_POST_DETAILS_ERROR,
      payload: { error: e.message },
    });
  }
}

export function* fetchPostDetailsSaga() {
  yield takeEvery(DASHBOARD_CONSTANTS.FETCH_POST_DETAILS, fetchPostDetails);
}
