import React, { Suspense, lazy } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Direction from "./pages/theme/Direction";

import theme from "./pages/theme";

const Login = lazy(() => import("./pages/login"));
const App = lazy(() => import("./pages/app"));

const Router: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Direction>
        <BrowserRouter>
          <Suspense fallback={<div />}>
            <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/login" component={Login} />
              <Route component={() => <h1>404</h1>} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Direction>
    </MuiThemeProvider>
  );
};

export default Router;
