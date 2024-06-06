import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer/Footer";
import Renovate from "../components/renovate";

const page = () => {
  return (
    <>
      <Navbar isLoggedIn={false} />
      <Renovate />
      <Footer />
    </>
  );
};

export default page;
