import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "90%",
    height: 88,
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      width: 280,
      height: 72,
      marginBottom: "5px",
    },
  },
  title: {
    margin: "10px 0 30px 0",
    letterSpacing: "1px",
    textTransform: "uppercase",
    textAlign: "center",
  },
  wrapper: {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width:"50vw",
    margin:"0 auto",
    [theme.breakpoints.down("xs")]: {
      width:"290px",
      padding: "30px 5px",
    },
  },
  text: {
    marginTop: 0,
    fontSize: "20px",
  },
  btn: {
    letterSpacing: "2px",
    margin: "20px 0",
    padding: "13px 100px",
    color: "white",
    width: "50%",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      margin: "10px 0",
      padding: "10px 97px",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },
  },
  paper: {
    maxWidth: "100vw",
  },
  errText: {
    fontSize: "24px",
    color: "red",
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
