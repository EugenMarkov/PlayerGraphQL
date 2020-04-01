import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import jwt from "jwt-decode";
import { useApolloClient } from "@apollo/react-hooks";
import isExpired from "../components/common/isExpired/isExpired";

import HomePage from "../pages/HomePage/HomePage";
// import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
// import { AuthHOC } from "../components/common/HOC/AuthHOC";
import { RegistrationHOCWrapper } from "../components/common/HOC/RegistrationHOCWrapper";
import Preloader from "../components/Preloader";

const Routes = ({ isPreloader }) => {
  const client = useApolloClient();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedToken = jwt(token);
      const isExpiredToken = isExpired(jwt(token));
      if (isExpiredToken) {
        client.writeData({
          data: {
            isAuthenticated: true, name: decodedToken.name, id: decodedToken.id
          },
        });
      } else {
        client.writeData({ data: { isAuthenticated: false, name: "", id: "" } });
        localStorage.removeItem("authToken");
      }
    }
  }, [client]);

  return isPreloader ? (
    <Preloader />
  ) : (
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/*<Route path="/profile" component={AuthHOC(ProfilePage)} />*/}
      <Route path="/registration" component={RegistrationHOCWrapper(RegistrationPage)} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
