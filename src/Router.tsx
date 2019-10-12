import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import Direction from "./pages/theme/Direction";
import Login from "./pages/login";
import App from "./pages/app";
// Material-UI
import theme from "./pages/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

const Router: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Direction>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route component={() => <h1>404</h1>} />
          </Switch>
        </BrowserRouter>
      </Direction>
    </MuiThemeProvider>
  );
};

export default Router;
