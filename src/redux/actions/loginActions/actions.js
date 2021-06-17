import { LOGIN_CONSTANTS } from "./actionTypes";

export const changeEmailAction = (payload) => ({
  type: LOGIN_CONSTANTS.EMAIL,
  payload,
});

export const changePasswordAction = (payload) => ({
  type: LOGIN_CONSTANTS.PASSWORD,
  payload,
});

export const changeEmailErrorAction = (payload) => ({
  type: LOGIN_CONSTANTS.EMAIL_ERROR,
  payload,
});

export const changePasswordErrorAction = (payload) => ({
  type: LOGIN_CONSTANTS.PASSWORD_ERROR,
  payload,
});

export const changeLoginErrorAction = (payload) => ({
  type: LOGIN_CONSTANTS.LOGIN_ERROR,
  payload,
});
