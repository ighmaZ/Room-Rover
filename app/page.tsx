import React from "react";
import Navbar from "./components/navbar";
const Page = () => {
  return (
    <div className="w-full min-h-screen justify-center ">
      <Navbar isLoggedIn={true} />
      <h1 className="text-glow text-5xl text-center mt-20 text-glow">
        Redesign Your Home Using <span className="text-gradient">AI</span>
      </h1>
    </div>
  );
};

export default Page;
