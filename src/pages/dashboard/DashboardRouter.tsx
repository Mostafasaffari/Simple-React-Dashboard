import React from "react";
import {
  BrowserRouter as Router,
  RouteComponentProps,
  Route
} from "react-router-dom";

interface IProps extends RouteComponentProps {}

const DashboardRouter: React.FC<IProps> = ({ match }) => {
  const { url } = match;

  return (
    <Router>
      <Route component={() => <h1>hi</h1>} path={`${url}/`} exact />
    </Router>
  );
};

export default DashboardRouter;
