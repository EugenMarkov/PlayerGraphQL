import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./useStyles";

const PreloaderAdaptive = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <CircularProgress />
      </div>
    </div>
  );
};

export default PreloaderAdaptive;
