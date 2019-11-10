import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { useDispatch } from "react-redux";

import Storage from "../../helpers/localStorage";

import userActions from "../../redux/user/actions";

import Input from "../../component/ui-kit/input";
import Button from "../../component/ui-kit/button";
import Typography from "../../component/ui-kit/typography/typography";

import useStyle from "./login.style";

interface IProps extends RouteComponentProps {}

const Login: React.FC<IProps> = ({ history }) => {
  const classes = useStyle();
  //const token: string = useSelector((state: AppState) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Storage().get("token")) {
      history.push("/dashboard");
    }
  });
  const handleLogin = () => {
    const token = "test--";
    Storage().set("token", token);
    dispatch(userActions.setToken(token));
    history.push("/dashboard");
  };

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
