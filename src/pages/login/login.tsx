import React from "react";
import { RouteComponentProps } from "react-router";

import Storage from "../../helpers/localStorage";

import Input from "../../component/ui-kit/input";
import Button from "../../component/ui-kit/button";
import Typography from "../../component/ui-kit/typography";

import useStyle from "./login.style";

interface IProps extends RouteComponentProps {}

const Login: React.FC<IProps> = ({ history }) => {
  const classes = useStyle();

  const handleLogin = () => {
    Storage().set("token", "test--");
    history.push("/dashboard");
  };
  if (Storage().get("token")) {
    history.push("/dashboard");
    return null; //TODO: implement Loading here
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Typography variant="h4">Login</Typography>
      </div>
      <div className={classes.body}>
        <Input label="username" variant="outlined" className="login-input" />
        <Input
          label="password"
          variant="outlined"
          type="password"
          className="login-input"
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
