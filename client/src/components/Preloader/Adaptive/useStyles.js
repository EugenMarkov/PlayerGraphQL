import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 450,
    marginTop: 100,
    marginBottom: 100,
  },
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(4),
    },
  },
}));

export default useStyles;
