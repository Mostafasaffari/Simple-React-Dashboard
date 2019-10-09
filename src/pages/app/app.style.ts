import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

//@ts-ignore
const style = makeStyles((theme: Theme) => {
  return {
    wrapper: {
      backgroundColor: theme.palette.background.default
    }
  };
});

export default style;
