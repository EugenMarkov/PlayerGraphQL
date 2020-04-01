import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "inline-flex",
    minWidth: 260,
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      minWidth: 50,
    },
    justifyContent: "flex-end",
  },
  link: {
    marginRight: "20px",
    textDecoration: "none",
    color: "black",
  },
  icon: {
    fontSize: "24px",
  },
  span: {
    display: "none",
    width: 200,
    [theme.breakpoints.up("sm")]: {
      marginRight: "15px",
      display: "inline-flex",
      justifyContent: "flex-end",
      alignItems: "center",
      cursor: "default",
    },
  },
  btn: {
    marginRight: 24,
  },
  regLink: {
    display: "inline-flex",
    alignItems: "center",
    marginRight: 15,
    color:  theme.palette.secondary.dark,
    textDecoration: "none",
    "&:hover": {
      color:  theme.palette.primary.main,
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default useStyles;
