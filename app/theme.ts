"use client";
import { createTheme } from "@mui/material/styles";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    official: true;
  }
}

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
      main: "#D6784C",
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
          borderRadius: "50px",
          variants: [{
            props: {
              variant: "official",
            },
            style: {
              backgroundColor: '#F2F2F2'
            },
          }]
        },
      },
    }
  },
});

export default theme;
