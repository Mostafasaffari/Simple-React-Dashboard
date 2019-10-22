import React from "react";

import Typography from "../../component/ui-kit/typography";
import Input from "../../component/ui-kit/input";
import Button from "../../component/ui-kit/button";

import useStyle from "./login.style";

const Login = () => {
  const classes = useStyle();
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
        <Button variant="contained">Login</Button>
      </div>
    </div>
  );
};

export default Login;
