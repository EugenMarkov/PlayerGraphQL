import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";

import useStyles from "./useStyles";

import PersonalData from "./PersonalData/PersonalData";
import ChangePasswordForm from "./ChangePasswordForm/ChangePasswordForm";

import { logOut } from "../../store/actions/loginActions";
import { loadUserData } from "../../store/actions/userProfile";


function TabPanel(props) {
  const { children, value, index } = props;
  const classes = useStyles();

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.tabpanel}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </Typography>
  );
}

const Profile = ({ loadUserData, logOut }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const profileLogOut = () => {
    logOut();
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className={classes.tabs}
      >
        <Tab
          label="Password Change"
          id="vertical-tab-0"
          aria-controls="vertical-tabpanel-0"
        />
        <Tab
          label="Personal Details "
          id="vertical-tab-1"
          aria-controls="vertical-tabpanel-1"
          onClick={() => loadUserData()}
        />
        <Tab
          label="Log Out"
          id="vertical-tab-2"
          aria-controls="vertical-tabpanel-2"
          onClick={() => profileLogOut()}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ChangePasswordForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PersonalData />
      </TabPanel>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAdmin: state.loginReducer.user.isAdmin,
  };
}

export default connect(mapStateToProps, { loadUserData, logOut })(Profile);
