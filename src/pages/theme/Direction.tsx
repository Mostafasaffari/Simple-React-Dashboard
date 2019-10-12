import React from "react";
// JSS
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

const jss = create({
  plugins: [...jssPreset().plugins, rtl()]
});

const Direction: React.FC = ({ children }) => {
  return <StylesProvider jss={jss}>{children}</StylesProvider>;
};

export default Direction;
