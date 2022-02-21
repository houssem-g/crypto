import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Analyse  from "../pages/analysis"; 
import { ROOT, Cryptomonnaies, Analysis, Scoring } from "./constants";
// import { dark, light } from "../styles/muiTheme";

export const RouterConfig = () => {
  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={Home} />
        <Route exact path={Cryptomonnaies} component={Home} />
        <Route exact path={Analysis} component={Analyse} />
        <Route exact path={Scoring} component={Analyse} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        {/* <Route exact path={PAGE1} component={Page1} /> */}

        {/* List all private/auth routes here */}
        {/* <PrivateRoute path={AUTH_PAGE1}>
          <AuthorizedPage1 />
        </PrivateRoute> */}
        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}

      </Switch>
    </div>
  );
};
