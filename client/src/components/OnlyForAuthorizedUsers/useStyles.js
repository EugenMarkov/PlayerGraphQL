import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    minHeight: "80vh",
  },
  title: {
    fontSize: 18,
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: "center",
    fontWeight: 600,
    textTransform: "uppercase",
    color: theme.palette.secondary.dark,
    cursor: "default",
  },
}));

export default useStyles;
