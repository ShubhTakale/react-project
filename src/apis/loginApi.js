import { axiosClient } from "./apiHelper.js";

export const doLogin = ({ email, password }) => {
  return axiosClient("POST", "auth", {
    username: email,
    password,
    type: "normal",
  });
};
export const doSignup = ({ email, fullName, password, userName }) => {
  return axiosClient("POST", "auth/register", {
    email,
    password,
    full_name: fullName,
    username: userName,
    type: "public",
    accepted_terms: true,
  });
};
