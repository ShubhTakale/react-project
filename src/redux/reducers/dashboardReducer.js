import { DASHBOARD_CONSTANTS } from "redux/actions/dashboardActions/actionTypes";

const initialState = {
  posts: [],
  post_details: {},
  loading: true,
  error: "",
};

export const dashboardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DASHBOARD_CONSTANTS.POSTS:
      return { ...state, posts: payload };
    case DASHBOARD_CONSTANTS.FETCH_POSTS:
      return { ...state, loading: true };
    case DASHBOARD_CONSTANTS.FETCH_POSTS_SUCCESS:
      return { ...state, posts: payload.posts, loading: false };
    case DASHBOARD_CONSTANTS.FETCH_POSTS_ERROR:
      return { ...state, error: payload.error, loading: false };

    case DASHBOARD_CONSTANTS.POST_DETAILS:
      return { ...state, post_details: payload };
    case DASHBOARD_CONSTANTS.FETCH_POST_DETAILS:
      return { ...state, loading: true };
    case DASHBOARD_CONSTANTS.FETCH_POST_DETAILS_SUCCESS:
      return { ...state, post_details: payload.post, loading: false };
    case DASHBOARD_CONSTANTS.FETCH_POST_DETAILS_ERROR:
      return { ...state, error: payload.error, loading: false };
    default:
      return state;
  }
};
