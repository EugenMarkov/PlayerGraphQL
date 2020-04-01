import React, { useState, useRef } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { Link } from "react-router-dom";
import { useApolloClient, useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import useStyles from "./useStyles";


const ProfileMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const client = useApolloClient();
  const CHEK_ID = gql`
  query checkUserId {
    id @client
  }
`;
  const { data: { id} } = useQuery(CHEK_ID);
  const STOP_MOVIE = gql`
  mutation stopMovie( $id: ID!) {
    stopMovie(id: $id) {
      message
      status
    } 
  }
`;
  const [stopMovie] = useMutation(STOP_MOVIE);
  const profileLogOut = () => {
    client.writeData({ data: { isAuthenticated: false, name: "", id: "" } });
    localStorage.removeItem("authToken");
    stopMovie({variables: {
        id: id,
      }});
  };

  return (
    <div className={classes.root}>
      <IconButton
        className={classes.icon}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <AccountCircle />
      </IconButton>
      <Popper
        className={classes.paper}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className={classes.list}
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <Link to="/" className={classes.text}>
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                  </Link>
                  {/*<Link to="/profile" className={classes.text}>*/}
                  {/*  <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                  {/*</Link>*/}
                  <MenuItem className={classes.text} onClick={profileLogOut}>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default ProfileMenu;
