import React from "react";
import Navbar from "./components/navbar";
import AnimatedText from "./components/animatedText";
const Page = () => {
  return (
    <div className="w-full min-h-screen justify-center ">
      <Navbar isLoggedIn={true} />
      <AnimatedText />
    </div>
  );
};

export default Page;
