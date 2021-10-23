import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Dashboard from "../components/Dashboard/Dashboard";
import AddEmployee from "../components/AddEmployee/AddEmployee";

import { ROUTES } from "../constant/routes";

const Router = () => {
  const PrivateRoute = ({ component, ...rest }) => {
    return (
      <Route
        {...rest}
        exact
        render={(props) =>
          localStorage.getItem("token") ? (
            <div>{React.createElement(component, props)}</div>
          ) : (
            <Redirect to={ROUTES.LOGIN} />
          )
        }
      />
    );
  };
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <Route exact path={ROUTES.SIGNUP} component={Signup} />

      <PrivateRoute exact path={ROUTES.DASHBOARD} component={Dashboard} />
      <PrivateRoute exact path={ROUTES.ADD_EMPLOYEE} component={AddEmployee} />
    </Switch>
  );
};

export default Router;
