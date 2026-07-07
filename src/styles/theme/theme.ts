import { createTheme } from '@mui/material/styles';
import { defaultTheme } from '../default';

export const theme = createTheme({
  palette: {
    primary: {
      main: defaultTheme["blue-500"],
      dark: defaultTheme["blue-700"],
      light: defaultTheme["blue-200"],
      contrastText: defaultTheme.white,
    },
    secondary: {
      main: defaultTheme["green-300"],
      dark: defaultTheme["green-700"],
      contrastText: defaultTheme["blue-800"],
    },
    warning: {
      main: defaultTheme["yellow-300"],
      dark: defaultTheme["yellow-500"],
      contrastText: defaultTheme["blue-800"],
    },
    error: {
      main: defaultTheme["red-500"],
      dark: defaultTheme["red-700"],
    },
    success: {
      main: defaultTheme["green-500"],
      dark: defaultTheme["green-700"],
    },
    background: {
      default: defaultTheme.whiteGhost,
      paper: defaultTheme.white,
    },
    text: {
      primary: defaultTheme["gray-900"],
      secondary: defaultTheme["gray-500"],
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
      letterSpacing: 0,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});
