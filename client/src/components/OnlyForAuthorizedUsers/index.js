import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import PlayerWraper  from "../PlayerWrapper";
import useStyles from "./useStyles";

const OnlyForAuthorizedUsers = ({ isAuthenticated }) => {
  const classes = useStyles();

  return isAuthenticated ? (
    <PlayerWraper />
  ) : (
    <Container className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        Player only for authorized users
      </Typography>
      <Typography align="center">Log in, please.</Typography>
    </Container>
  );
};

export default OnlyForAuthorizedUsers;
