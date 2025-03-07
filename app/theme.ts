"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: { light: true },
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#08677F",
    },
    secondary: {
      main: "#455E91",
    },
    error: {
      main: "#8E4D2E",
      light: "#FFDBCD",
    },
    success: {
      main: "#2e7d32",
    },
    info: {
      main: "#0288d1",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "unset",
          padding: "10px 24px",
          borderRadius: "50px"
        },
      },
    }
  },
});

export default theme;
