import React from "react";
import {
  BrowserRouter as Router,
  RouteComponentProps,
  Route
} from "react-router-dom";
import App from "./app/App";

interface IProps extends RouteComponentProps {}

const DashboardRouter: React.FC<IProps> = ({ match: { url } }) => {
  return (
    <Router>
      <Route component={App} path={`${url}/`} exact />
      <Route
        component={() => <h1>this is test page Setting</h1>}
        path={`${url}/setting`}
        exact
      />
    </Router>
  );
};

export default DashboardRouter;
