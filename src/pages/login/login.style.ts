import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const style = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: "100%",
      height: "100vh"
    },
    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),
      width: "300px",
      borderRadius: "10px 10px 0 0",
      border: "1px solid #f77062",
      background: "linear-gradient(to right, #fe5193, #f77062)",
      "& h4": {
        color: "#fff",
        fontWeight: "bold"
      }
    },
    body: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),
      width: "300px",
      border: "1px solid #fe5193",
      "& .login-input": {
        margin: "8px 0"
      }
    }
  })
);

export default style;
