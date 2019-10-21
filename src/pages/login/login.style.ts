import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const style = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100vh"
    }
  })
);

export default style;
