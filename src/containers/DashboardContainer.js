import React, { useEffect } from "react";
import PostCard from "components/PostCard";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DASHBOARD_CONSTANTS } from "redux/actions/dashboardActions/actionTypes";

function DashboardContainer() {
  const dashboardState = useSelector((state) => state.dashboard);
  const { posts } = dashboardState;
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch({ type: DASHBOARD_CONSTANTS.FETCH_POSTS });
  }, [dispatch]);

  const getDetails = (id) => {
    history.push(`/dashboard/details/${id}`);
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} getDetails={getDetails} />;
        })}
      </div>
    </div>
  );
}

export default DashboardContainer;
