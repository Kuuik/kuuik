import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  landing as landingRoutes,
  client as clientRoutes,
  investor as investorRoutes
} from "./index";

import ClientLayout from "../components/clientLayout";
import InvestorLayout from "../components/investorLayout";
import LandingLayout from '../components/landing'

const childRoutes = (Layout, routes) =>
  routes.map(({ children, path, component: Component }, index) =>
    children ? (
      // Route item with children
      children.map(({ path, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      ))
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        exact
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  );

const Routes = () => (
  <Router>

      <Switch>
        {childRoutes(LandingLayout, landingRoutes)}
        {childRoutes(ClientLayout, clientRoutes)}
        {childRoutes(InvestorLayout, investorRoutes)}
      </Switch>

  </Router>
);

export default Routes;
