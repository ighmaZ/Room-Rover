import React from "react";
import Navbar from "./components/navbar";
const Page = () => {
  return (
    <div className="w-full min-h-screen justify-center ">
      <Navbar isLoggedIn={true} />
      <div className="text-center mt-20">
        <span className="content__container block text-5xl ">
          <ul className="content__container__list">
            <li className="content__container__list__item xl:pl-3">
              Redesign Your Home Using <span className="text-gradient">AI</span>
            </li>
            <li className="content__container__list__item xl:pl-3">
              Design Your Room from{" "}
              <span className="text-gradient">Sketch</span> to Reality
            </li>
            <li className="content__container__list__item xl:pl-3">
              Design using <span className="text-gradient">AI Prompts</span> to
              Reality
            </li>
            <li className="content__container__list__item xl:pl-3">
              <span className="text-gradient">AI Assisted </span>
              Interior Customization.
            </li>
            <li className="content__container__list__item xl:pl-3">
              <span className="text-gradient">Easy </span>Interior Design, Room
              by Room.
            </li>
            <li className="content__container__list__item xl:pl-3">
              Get the <span className="text-gradient">Real</span> Look You Want
            </li>
            <li className="content__container__list__item xl:pl-3">
              The <span className="text-gradient">Best</span> AI interior
              Designer ever made
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Page;
