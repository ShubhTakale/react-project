import React from "react";
import * as yup from "yup";
import LoginComponent from "components/LoginComponent";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEmailAction,
  changeEmailErrorAction,
  changeLoginErrorAction,
  changePasswordAction,
  changePasswordErrorAction,
} from "redux/actions/loginActions/actions";
import { LOGIN_CONSTANTS } from "redux/actions/loginActions/actionTypes";

function LoginContainer() {
  const loginState = useSelector((state) => state.login);
  const {
    email,
    password,
    emailError,
    passwordError,
    loginError,
    user_data,
  } = loginState;
  const dispatch = useDispatch();

  let schema = yup.object().shape({
    password: yup.string().required(),
    email: yup.string().required(),
  });

  const handleEmailChange = (e) => {
    dispatch(changeEmailAction(e.target.value));
  };
  const handlePasswordChange = (e) => {
    dispatch(changePasswordAction(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeEmailErrorAction(""));
    dispatch(changePasswordErrorAction(""));
    dispatch(changeLoginErrorAction(""));
    schema
      .isValid({
        email: email,
        password: password,
      })
      .then(function (valid) {
        if (!valid) {
          schema
            .validate(
              {
                email: email,
                password: password,
              },
              { abortEarly: false }
            )
            .catch(function (error) {
              error.inner.forEach((element) => {
                if (element.path === "email") {
                  dispatch(changeEmailErrorAction(element.message));
                } else {
                  dispatch(changePasswordErrorAction(element.message));
                }
              });
            });
        } else {
          dispatch({
            type: LOGIN_CONSTANTS.LOGIN_REQUEST,
            payload: { email, password },
          });
        }
      });
  };
  if (user_data?.auth_token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <LoginComponent
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
        email={email}
        password={password}
        emailError={emailError}
        passwordError={passwordError}
        loginError={loginError}
      />
    </div>
  );
}

export default LoginContainer;
