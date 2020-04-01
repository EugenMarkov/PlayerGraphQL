import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  textField: {
    width: 300,
    height: 70,
    minWidth: 240,
    marginBottom: 5,
    [theme.breakpoints.down("xs")]: {
      width: 200,
    },
  },
  btn: {
    letterSpacing: "2px",
    padding: "9px 8px",
    margin: "14px 0",
    color: "white",
    width: 300,
    [theme.breakpoints.down("xs")]: {
      width: 240,
    },
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },
  },
  helper: {
    lineHeight: 1,
    textAlign: "justify",
  }
}));

export default useStyles;
