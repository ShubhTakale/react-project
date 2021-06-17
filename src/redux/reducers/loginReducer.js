import { LOGIN_CONSTANTS } from "redux/actions/loginActions/actionTypes";

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  loginError: "",
  user_data: null,
  loading: true,
};

export const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_CONSTANTS.EMAIL:
      return { ...state, email: payload };
    case LOGIN_CONSTANTS.PASSWORD:
      return { ...state, password: payload };
    case LOGIN_CONSTANTS.EMAIL_ERROR:
      return { ...state, emailError: payload };
    case LOGIN_CONSTANTS.PASSWORD_ERROR:
      return { ...state, passwordError: payload };
    case LOGIN_CONSTANTS.LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_CONSTANTS.LOGIN_SUCCESS:
      return { ...state, user_data: payload.user_data, loading: false };
    case LOGIN_CONSTANTS.LOGIN_ERROR:
      return { ...state, loading: false, loginError: payload.error };
    case LOGIN_CONSTANTS.LOGOUT:
      return state;
    default:
      return state;
  }
};
