"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer/Footer";
import SketchToDesign from "../components/sketchToDesign";
import ImageToDesign from "../components/imageToDesign";
import withAuth from "../components/withAuth";

const Sketch = () => {
  return (
    <>
      <Navbar />
      <SketchToDesign />
      <Footer />
    </>
  );
};

export default withAuth(Sketch);
