import React from "react";
import { Container, Grid } from "@material-ui/core";

import useStyles from "./useStyles";


import Copy from "./Copy/Copy";

const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.bg} maxWidth="xl">
      <Grid>
        <Copy />
      </Grid>
    </Container>
  );
};

export default Footer;
