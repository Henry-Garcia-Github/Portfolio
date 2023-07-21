import { createTheme } from "@mui/material";

const rootElement = document.getElementById("root");
const themeMui = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
  palette: {
    primary: {
      main: "#F5F5F5",
      contrastText: "#FCFAFF",
    },
    secondary: {
      main: "#AFE2B1",
    },
    success: {
      main: "#2E7D32",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ED6C02",
    },
    info: {
      main: "#2196F3",
    },
    white: {
      main: "#F5F5F5",
    },
  },
});

export default themeMui;
