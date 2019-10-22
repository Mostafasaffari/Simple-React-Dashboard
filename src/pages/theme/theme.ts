import { createMuiTheme, responsiveFontSizes, Theme } from "@material-ui/core/styles";

const direction = "ltr";
const theme: Theme = createMuiTheme({
  direction,
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          direction
        }
      }
    }
  },
  palette: {
    background: {}
  }
});

const responsiveFontSizesTheme = responsiveFontSizes(theme);

export default responsiveFontSizesTheme;
