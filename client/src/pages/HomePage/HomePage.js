import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OnlyForAuthorizedUsers from "../../components/OnlyForAuthorizedUsers";
import ScrollOnTop from "../../components/common/ScrollOnTop/ScrollOnTop";
import BackToTop from "../../components/common/GoUpButton";


function HomePage() {
  const CHEK_LOGGED_IN = gql`
  query chekUserLoggedIn {
    isAuthenticated @client
    name @client
  }
`;
  const { data: { isAuthenticated, name } } = useQuery(CHEK_LOGGED_IN);

  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <Header isAuthenticated={isAuthenticated} name={name} />
      <OnlyForAuthorizedUsers isAuthenticated={isAuthenticated} />
      <Footer />
    </>
  );
}

export default HomePage;
