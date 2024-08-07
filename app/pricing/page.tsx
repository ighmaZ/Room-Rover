"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer/Footer";
import Pricing from "../components/pricing";
import withAuth from "../components/withAuth";

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <Pricing />
      <Footer />
    </>
  );
};

export default withAuth(PricingPage);
