"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer/Footer";
import ImageToDesign from "../components/imageToDesign";
import withAuth from "../components/withAuth";

const Design = () => {
  return (
    <>
      <Navbar />
      {/* <SketchToDesign /> */}
      <ImageToDesign />
      <Footer />
    </>
  );
};

export default withAuth(Design);
