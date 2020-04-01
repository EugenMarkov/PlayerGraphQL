import React from "react";
import { Redirect } from "react-router-dom";
import { compose } from "recompose";
import { graphql } from "react-apollo";

import { userQuery } from "./queries";


export const AuthHOC = Component => {
  const Wrapper = ({ isAuthenticated }) => isAuthenticated ? <Component /> : <Redirect to="/" /> ;

  // const mapStateToProps = state => {
  //   return {
  //     isAuthenticated: state.loginReducer.isAuthenticated,
  //   };
  // };

  return Wrapper;
};
