import {
  createMuiTheme,
  responsiveFontSizes,
  Theme
} from "@material-ui/core/styles";

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
    },
    MuiButton: {
      label: {
        fontWeight: 800
      },
      root: {
        color: "#ffffff",
        background: "linear-gradient(107.24deg, #04f0c5 0%, #00dda2 99.85%)"
      }
    }
  },
  palette: {
    background: {}
  }
});

const responsiveFontSizesTheme = responsiveFontSizes(theme);

export default responsiveFontSizesTheme;
