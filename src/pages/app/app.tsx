import React from "react";
import useStyle from "./app.style";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation("home");
  const classes = useStyle();
  return (
    <div className={classes.wrapper}>
      <h1>Test app </h1>
      <Link to="/login">{t("title")}</Link>
      <TextField variant="outlined" label="hi" />
    </div>
  );
};

export default App;
