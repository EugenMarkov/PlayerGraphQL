import React from "react";
import BackToTop from "../../components/common/GoUpButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "../../components/Profile/Profile";
import ScrollOnTop from "../../components/common/ScrollOnTop/ScrollOnTop";

const ProfilePage = () => {
  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <Header />
      <Profile />
      <Footer />
    </>
  );
};

export default ProfilePage;
