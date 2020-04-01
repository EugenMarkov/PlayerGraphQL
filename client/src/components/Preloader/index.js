import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PreloaderAdaptive from "./Adaptive";
import PreloaderAdaptiveSmall from "./AdaptiveSmall";
import useStyles from "./useStyles";

const Preloader = () => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <>
      {matches && (
        <div>
          <PreloaderAdaptive />
        </div>
      )}
      {!matches && (
        <div className={classes.adaptive_preloader}>
          <PreloaderAdaptiveSmall />
        </div>
      )}
    </>
  );
};

export default Preloader;
