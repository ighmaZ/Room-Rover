import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer/Footer";

const page = () => {
  return (
    <>
      <Navbar isLoggedIn={false} />
      <Footer />
    </>
  );
};

export default page;
