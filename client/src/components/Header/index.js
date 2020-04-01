import React, { useState } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

import LoginButton from "./LoginButton/LoginButton";
import LoginForm from "../LoginForm";

import useStyles from "./useStyles";

const Header = ({ isAuthenticated, name }) => {
  const [ isModalOpen, setIsModalOpen ] = useState(true);
  const classes = useStyles();

  return (
    <div>
      <AppBar color="inherit" position="fixed">
        <Toolbar className={classes.flex}>
          <div className={classes.logo_wrapper}>
            <Link to="/">
              <img src="/img/logo.jpg" alt="logo" className={classes.logo} />
            </Link>
          </div>
          <Typography className={classes.title}>
            Player
          </Typography>
          <div>
            <LoginButton isAuthenticated={isAuthenticated} name={name} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </div>
        </Toolbar>
      </AppBar>
      {!isAuthenticated && <LoginForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
      <div className={classes.layer} />
    </div>
  );
};

export default Header;
