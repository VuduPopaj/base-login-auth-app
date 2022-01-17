import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c91841",
      light: "#cccccc",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#DEB887",
      light: "#e7e9ec",
      contrastText: "#ffffff",
    },
    black: "#000000",
    white: "#ffffff",
  },
});

export default theme;
