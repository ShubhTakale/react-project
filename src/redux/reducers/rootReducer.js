import { combineReducers } from "redux";
import { dashboardReducer } from "./dashboardReducer";
import { loginReducer } from "./loginReducer";
import { signupReducer } from "./signupReducer";
export const rootReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer,
  signup: signupReducer,
});
