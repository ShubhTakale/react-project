import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsComponent from "components/DetailsComponent";
import { DASHBOARD_CONSTANTS } from "redux/actions/dashboardActions/actionTypes";

function DetailsContainer(props) {
  const params = useParams();
  const { id } = params;
  const state = useSelector((state) => state.dashboard);
  const { post_details: post } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: DASHBOARD_CONSTANTS.FETCH_POST_DETAILS,
      payload: { id },
    });
  }, [dispatch, id]);
  return (
    <div>
      <DetailsComponent post={post} />
    </div>
  );
}

export default DetailsContainer;
