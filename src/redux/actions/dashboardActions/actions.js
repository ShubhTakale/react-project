import { DASHBOARD_CONSTANTS } from "./actionTypes";

export const postsAction = (payload) => ({
  type: DASHBOARD_CONSTANTS.POSTS,
  payload,
});

export const postDetailsAction = (payload) => ({
  type: DASHBOARD_CONSTANTS.POST_DETAILS,
  payload,
});
