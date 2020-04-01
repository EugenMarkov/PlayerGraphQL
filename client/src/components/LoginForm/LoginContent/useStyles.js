import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "90%",
    height: 88,
    minWidth: 240,
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      minWidth: 200,
      height: 72,
      marginBottom: "5px",
    },
  },
  title: {
    margin: "10px 0 30px 0",
    textTransform: "uppercase",
    textAlign: "center",
    color: theme.palette.primary.dark,
    [theme.breakpoints.down("xs")]: {
      margin: "10px 0 20px 0",
    },
  },
  wrapper: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    maxWidth: "70%",
    minWidth: 260,
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
  },
  text: {
    marginTop: "0",
    fontSize: "18px",
  },
  regLink: {
    fontSize: "18px",
    fontWeight: 600,
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  btn: {
    letterSpacing: "2px",
    margin: "11px 0",
    padding: "12px 100px",
    color: "white",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 100px",
    },
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    width: "40vw",
    minWidth: 300,
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("lg")]: {
      width: "50vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "70vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
    },
  },
  errMsg: {
    fontSize: "24px",
    color: "red",
  },
  icon: {
    margin: "0 auto",
    color: theme.palette.primary.light,
    fontSize: "6.5em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "5.5em",
    },
  },
  iconPassword: {
    [theme.breakpoints.down("xs")]: {
      padding: 8,
    }
  },
  helper: {
    lineHeight: 1,
    textAlign: "justify",
  }
}));

export default useStyles;
