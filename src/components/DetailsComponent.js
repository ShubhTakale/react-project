import React from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

function DetailsComponent(props) {
  return (
    <div>
      <PostCard post={props.post} />
      <Link to="/dashboard">Back</Link>
    </div>
  );
}

export default DetailsComponent;
