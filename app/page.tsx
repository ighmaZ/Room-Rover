import React from "react";
import Navbar from "./components/navbar";
import AnimatedText from "./components/animatedText";
import Carousel from "./components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Hero from "./components/hero";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Page = () => {
  return (
    <div className="w-full min-h-screen justify-center ">
      <Navbar isLoggedIn={true} />
      <AnimatedText />
      <Carousel slides={SLIDES} options={OPTIONS} />
      <Hero />
    </div>
  );
};

export default Page;
