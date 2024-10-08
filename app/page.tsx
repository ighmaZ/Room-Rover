import React from "react";
import Navbar from "./components/navbar";
import AnimatedText from "./components/animatedText";
import Carousel from "./components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Hero from "./components/hero";
import Faq from "./components/faq";
import Modal from "./components/modal";
import Footer from "./components/footer/Footer";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Page = () => {
  return (
    <div className="w-full min-h-screen justify-center ">
      <Modal />
      <Navbar />
      <AnimatedText />
      <Carousel slides={SLIDES} options={OPTIONS} />
      <Hero />
      <Faq />
      <Footer />
    </div>
  );
};

export default Page;
