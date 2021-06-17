import { SIGNUP_CONSTANTS } from "redux/actions/signupActions/actionTypes";
export const initialState = {
  email: "",
  fullName: "",
  password: "",
  userName: "",
  type: "",
  acceptedTerms: false,
  emailError: "",
  passwordError: "",
  fullNameError: "",
  userNameError: "",
  acceptedTermsError: "",
  user_data: null,
  signupError: "",
  loading: true,
};

export const signupReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "email":
      return { ...state, email: payload };
    case "fullName":
      return { ...state, fullName: payload };
    case "password":
      return { ...state, password: payload };
    case "userName":
      return { ...state, userName: payload };
    case "type":
      return { ...state, type: payload };
    case "acceptedTerms":
      return { ...state, acceptedTerms: payload };
    case "emailError":
      return { ...state, emailError: payload };
    case "passwordError":
      return { ...state, passwordError: payload };
    case "fullNameError":
      return { ...state, fullNameError: payload };
    case "userNameError":
      return { ...state, userNameError: payload };
    case "acceptedTermsError":
      return { ...state, acceptedTermsError: payload };
    case SIGNUP_CONSTANTS.SIGNUP_REQUEST:
      return { ...state, loading: true };
    case SIGNUP_CONSTANTS.SIGNUP_SUCCESS:
      return { ...state, user_data: payload.user_data, loading: false };
    case SIGNUP_CONSTANTS.SIGNUP_ERROR:
      return { ...state, signupError: payload.error, loading: false };
    default:
      return state;
  }
};

export const dispatchWrapper = (dispatch, type_t, payload_p) => {
  dispatch({ type: type_t, payload: payload_p });
};
