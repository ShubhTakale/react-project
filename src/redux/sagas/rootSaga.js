import { all } from "redux-saga/effects";
import { fetchDashboardDataSaga } from "./dashboardSaga";
import { doLoginSaga } from "./loginSaga";
import { fetchPostDetailsSaga } from "./postDetailsSaga";
import { doUserSignupSaga } from "./signupSaga";

export default function* rootSaga() {
  yield all([
    fetchDashboardDataSaga(),
    fetchPostDetailsSaga(),
    doLoginSaga(),
    doUserSignupSaga(),
  ]);
}
