import React from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

import useStyles from "./useStyles";

const LoginButton = ({ isAuthenticated, name, setIsModalOpen }) => {
  const handleModal = () => {
    setIsModalOpen(true);
  };

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {isAuthenticated ? (
        <div className={classes.wrapper}>
          <div className={classes.span}>
            <Typography component="span">Welcome,&nbsp;</Typography>
            <Typography component="span" noWrap>{` ${name}`}</Typography>
          </div>
          <ProfileMenu />
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Link className={classes.regLink} to="/registration" >
            <Typography component="span">Registration</Typography>
          </Link>
          <Button className={classes.btn} variant="contained" type="button" onClick={handleModal}>
            Login
          </Button>
        </div>
      )}
    </div>
  );
};


export default LoginButton;
