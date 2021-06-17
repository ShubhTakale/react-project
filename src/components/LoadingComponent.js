import React from "react";
import { Spinner } from "reactstrap";

function LoadingComponent() {
  return (
    <div className="flex">
      <Spinner>{""}</Spinner>
    </div>
  );
}

export default LoadingComponent;
