import React, { Suspense, lazy } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import store from "./redux/store";
import Storage from "./helpers/localStorage";

import theme from "./pages/theme/theme";
import Direction from "./pages/theme/Direction";

const Login = lazy(() => import("./pages/login"));
const App = lazy(() => import("./pages/app/App"));
const DashboardApp = lazy(() => import("./pages/dashboard/app"));

const Router: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Direction>
        <Provider store={store}>
          <BrowserRouter>
            <Suspense fallback={<div />}>
              <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <RestrictedRoute path="/dashboard" component={DashboardApp} />
                <Route component={() => <h1>404</h1>} />
              </Switch>
            </Suspense>
          </BrowserRouter>
        </Provider>
      </Direction>
    </MuiThemeProvider>
  );
};

interface IPropsRestrictRoute {
  component: React.FC<any>;
  [rest: string]: any;
}

const RestrictedRoute: React.FC<IPropsRestrictRoute> = ({
  component: Component,
  ...rest
}) => {
  const isLoggedIn = !!Storage().get("token");

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default Router;
