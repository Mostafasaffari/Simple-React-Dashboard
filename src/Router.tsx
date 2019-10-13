import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import Direction from "./pages/theme/Direction";
import Login from "./pages/login";
// Material-UI
import theme from "./pages/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

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
