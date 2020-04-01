import { createMuiTheme } from '@material-ui/core/styles';
import { blue, grey, red } from '@material-ui/core/colors';

const theme = createMuiTheme({

  breakpoints: {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: blue[700],
      light: blue[100],
      dark: blue[800],
    },
    secondary: {
      main: grey[700],
      dark: grey[800],
      medium: grey[500],
      light: grey[200],
    },
    error: red,
  },
  spacing: 8,

  typography: {
    h3: {
      fontSize: 22,
      fontWeight: 700,
      textTransform: "uppercase",
      color: grey[800],
      paddingTop: 30,
      paddingBottom: 30,
      textAlign: "center",
      cursor: "default",
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
      margin: 30,
      marginBottom: 8,
      textTransform: "uppercase",
      textAlign: "center",
      color: grey[800]
    }
  },

  overrides: {

    MuiTooltip: {
      tooltip: {
        fontSize: "13px",
        backgroundColor: blue[700],
      },
      arrow: {
        color: blue[700],
      },
    },
    MuiIconButton: {
      root: {
        color: blue[700],
        "&:hover": {
          backgroundColor: blue[100],
        },
      },
    },

    MuiFab: {
      secondary: {
        backgroundColor: blue[700],
        "&:hover": {
          backgroundColor: blue[800],
        },
      },
    },

    MuiButton: {
      root: {
        fontSize: 13,
        fontWeight: 600,
      },
      text: {
        color: grey[700],
        "&:hover": {
          color: blue[800],
          backgroundColor: blue[100],
        },
      },
      contained: {
        color: "white",
        backgroundColor: blue[700],
        "&:hover": {
          backgroundColor: blue[800],
        },
      },
      outlined: {
        color: blue[700],
        "&:hover": {
          color: blue[800],
          backgroundColor: blue[100]
        },
      },
    },
  },
});

export default theme;
