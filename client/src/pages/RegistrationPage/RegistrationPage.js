import React from "react";
import BackToTop from "../../components/common/GoUpButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RegistrationForm from "../../components/RegistrationForm";
import ScrollOnTop from "../../components/common/ScrollOnTop/ScrollOnTop";

const RegistrationPage = () => {
  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <Header />
      <RegistrationForm />
      <Footer />
    </>
  );
};

export default RegistrationPage;
