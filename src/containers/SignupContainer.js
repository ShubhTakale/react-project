import React from "react";
import Signup from "components/SignupComponent";
import * as yup from "yup";
import { dispatchWrapper } from "redux/reducers/signupReducer";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP_CONSTANTS } from "redux/actions/signupActions/actionTypes";
import { Redirect } from "react-router-dom";
import LoadingComponent from "components/LoadingComponent";
const SignupContainer = () => {
  const signupState = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const {
    email,
    fullName,
    password,
    userName,
    type,
    acceptedTerms,
    emailError,
    passwordError,
    fullNameError,
    userNameError,
    acceptedTermsError,
    user_data,
    loading
  } = signupState;

  const handleEmailChange = (e) => {
    dispatchWrapper(dispatch, "email", e.target.value);
  };
  const handlePassswordChange = (e) => {
    dispatchWrapper(dispatch, "password", e.target.value);
  };
  const handleFullNameChange = (e) => {
    dispatchWrapper(dispatch, "fullName", e.target.value);
  };
  const handleUserNameChange = (e) => {
    dispatchWrapper(dispatch, "userName", e.target.value);
  };
  const handleTypeChange = (e) => {
    dispatchWrapper(dispatch, "type", e.target.value);
  };
  const handleAcceptedTermsChange = (e) => {
    dispatchWrapper(dispatch, "acceptedTerms", e.target.checked);
  };
  let schema = yup.object().shape({
    email: yup.string().email().required(),
    fullName: yup.string().required(),
    password: yup
      .string()
      .required("No password provided.")
      .min(5, "Password is too short - should be 8 chars minimum."),
    userName: yup.string().required(),
    acceptedTerms: yup.boolean().isTrue(),
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatchWrapper(dispatch, "emailError", "");
    dispatchWrapper(dispatch, "passwordError", "");
    dispatchWrapper(dispatch, "fullNameError", "");
    dispatchWrapper(dispatch, "userNameError", "");
    dispatchWrapper(dispatch, "acceptedTermsError", "");
    schema
      .isValid({
        email: email,
        password: password,
        fullName: fullName,
        userName: userName,
        acceptedTerms: acceptedTerms,
      })
      .then(function (valid) {
        if (!valid) {
          schema
            .validate(
              {
                email: email,
                password: password,
                fullName: fullName,
                userName: userName,
                acceptedTerms: acceptedTerms,
              },
              { abortEarly: false }
            )
            .catch(function (error) {
              error.inner.forEach((e) => {
                if (e.path === "email") {
                  dispatchWrapper(dispatch, "emailError", e.message);
                } else if (e.path === "password") {
                  dispatchWrapper(dispatch, "passwordError", e.message);
                } else if (e.path === "fullName") {
                  dispatchWrapper(dispatch, "fullNameError", e.message);
                } else if (e.path === "userName") {
                  dispatchWrapper(dispatch, "userNameError", e.message);
                } else if (e.path === "acceptedTerms") {
                  dispatchWrapper(dispatch, "acceptedTermsError", e.message);
                }
              });
            });
        } else {
          dispatch({
            type: SIGNUP_CONSTANTS.SIGNUP_REQUEST,
            payload: { email, fullName, password, userName },
          });
        }
      });
  };

  if (user_data?.auth_token) {
    return <Redirect to="/login" />;
  }

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <Signup
        onSubmitHandler={onSubmitHandler}
        handlePassswordChange={handlePassswordChange}
        handleEmailChange={handleEmailChange}
        handleFullNameChange={handleFullNameChange}
        handleUserNameChange={handleUserNameChange}
        handleTypeChange={handleTypeChange}
        handleAcceptedTermsChange={handleAcceptedTermsChange}
        email={email}
        fullName={fullName}
        password={password}
        userName={userName}
        type={type}
        acceptedTerms={acceptedTerms}
        emailError={emailError}
        passwordError={passwordError}
        fullNameError={fullNameError}
        userNameError={userNameError}
        acceptedTermsError={acceptedTermsError}
      />
    </div>
  );
};

export default SignupContainer;
