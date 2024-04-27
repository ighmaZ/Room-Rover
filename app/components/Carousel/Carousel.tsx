"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import "./embla.css";
import Image from "next/image";
import DemoImg from "../../../assets/images/new-ai-image-generator-can-help-users-redesign-their-own-spaces_5.jpg";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <Image src={DemoImg} alt="img" className="imgg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
