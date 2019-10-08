import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./pages/app";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
