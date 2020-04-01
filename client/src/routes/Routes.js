import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import jwt from "jwt-decode";
import { useApolloClient } from "@apollo/react-hooks";
import isExpired from "../components/common/isExpired/isExpired";

import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import { RegistrationHOCWrapper } from "../components/common/HOC/RegistrationHOCWrapper";

const Routes = () => {
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

  return  (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/registration" component={RegistrationHOCWrapper(RegistrationPage)} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
