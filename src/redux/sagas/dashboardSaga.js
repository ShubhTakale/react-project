import { put, call, takeEvery } from "redux-saga/effects";
import { getPosts } from "apis/postsApis";
import { DASHBOARD_CONSTANTS } from "redux/actions/dashboardActions/actionTypes";

// Worker saga will be fired on FETCH_POSTS actions
function* fetchDashboardData(action) {
  try {
    const response = yield call(getPosts);
    yield put({
      type: DASHBOARD_CONSTANTS.FETCH_POSTS_SUCCESS,
      payload: { posts: response.data },
    });
  } catch (e) {
    yield put({
      type: DASHBOARD_CONSTANTS.FETCH_POSTS_ERROR,
      payload: { error: e.message },
    });
  }
}

// Starts fetchUser on each dispatched FETCH_POSTS action
// Allows concurrent fetches of user
export function* fetchDashboardDataSaga() {
  yield takeEvery(DASHBOARD_CONSTANTS.FETCH_POSTS, fetchDashboardData);
}
