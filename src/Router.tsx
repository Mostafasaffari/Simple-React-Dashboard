import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>home</h1>} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
