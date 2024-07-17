import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer/Footer";
import SketchToDesign from "../components/sketchToDesign";
import ImageToDesign from "../components/imageToDesign";
import { withAuth } from "../components/withAuth";

const page = () => {
  return (
    <>
      <Navbar />
      {/* <SketchToDesign /> */}
      <ImageToDesign />
      <Footer />
    </>
  );
};

export default page;
