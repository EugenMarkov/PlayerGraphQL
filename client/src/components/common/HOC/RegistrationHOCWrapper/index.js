import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";


export const RegistrationHOCWrapper = ( Component ) => {

  const Wrapper = () => {

    const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
    isAuthenticated @client
  }
`;
    const { data }  = useQuery(IS_LOGGED_IN);
    const { isAuthenticated } = data;

    if (isAuthenticated) {
      return <Redirect to="/" />
    } else {
      return <Component />
    }
  };

  return  Wrapper
};
