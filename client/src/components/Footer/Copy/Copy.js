import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./useStyles";

const Copy = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Typography className={classes.textedFooter}>
        Eugen Markov Inc. © 2020
      </Typography>
    </Grid>
  );
};

export default Copy;
