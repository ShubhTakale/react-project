import React from "react";
import { Switch } from "react-router-dom";
import NavbarComponent from "components/NavbarComponent";
import DashboardContainer from "containers/DashboardContainer";
import DetailsContainer from "containers/DetailsContainer";
import UserDetailsContainer from "containers/UserDetailsContainer";
import PrivateRoute from "./PrivateRoute";

function RestrictedRoutes() {
  const user = JSON.parse(sessionStorage.getItem("user_data"));
  return (
    <div>
      <NavbarComponent />
      <Switch>
        <PrivateRoute
          exact
          isAuth={Boolean(user)}
          path="/dashboard/details/:id"
          component={DetailsContainer}
        />
        <PrivateRoute
          exact
          path="/dashboard"
          isAuth={Boolean(user)}
          component={DashboardContainer}
        />
        <PrivateRoute
          exact
          isAuth={Boolean(user)}
          path="/dashboard/user"
          component={UserDetailsContainer}
        />
      </Switch>
    </div>
  );
}

export default RestrictedRoutes;
