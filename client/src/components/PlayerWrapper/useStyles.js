import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "90vh",
    marginTop: 20,
  },
  root: {
    width: "100%",
    overflowX: "auto",
  },
  player_wrapper: {
    position: "relative",
    paddingTop:" 56.25%",
    margin: 20,
  },
  player_wrapper_audio: {
    position: "relative",
    paddingTop:" 56.25%",
    margin: 20,
    backgroundColor: "black",
  },
  player: {
  position: "absolute",
  top: 0,
  left: 0,
    pointerEvents: "none",
  },
  player_controls: {
    display: "flex",
    justifyContent: "center"
  },
  player_btn: {
    padding: "9px 8px",
    margin: "14px 10px",
    color: "white",
    width: 110,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },
  },
  emptyPlayerList: {
    minHeight: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}));

export default useStyles;
