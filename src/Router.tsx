import React, { Suspense, lazy } from "react";
import rtl from "jss-rtl";
import { create } from "jss";
import {
  StylesProvider,
  jssPreset,
  MuiThemeProvider
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login";

import theme from "./theme";

const App = lazy(() => import("./pages/app"));

const jss = create({
  plugins: [...jssPreset().plugins, rtl()]
});

const Router: React.FC = () => {
  const body = document.querySelector("body");
  if (body && theme && theme.direction) {
    body.dir = theme.direction;
  }
  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Suspense fallback={<div />}>
            <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/login" component={Login} />
              <Route component={() => <h1>404</h1>} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default Router;
