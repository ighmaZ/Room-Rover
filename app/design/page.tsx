import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer/Footer";
import SketchToDesign from "../components/sketchToDesign";

const page = () => {
  return (
    <>
      <Navbar isLoggedIn={false} />
      <SketchToDesign />
      <Footer />
    </>
  );
};

export default page;
