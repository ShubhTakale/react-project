import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "components/HomeComponent";
import LoginContainer from "containers/LoginContainer";
import SignupContainer from "containers/SignupContainer";
import RestrictedRoutes from "./RestrictedRoutes";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="/dashboard" component={RestrictedRoutes} />
    </Switch>
  );
}

export default Routes;
