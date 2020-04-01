import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    zIndex: "20",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default useStyles;
