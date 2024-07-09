"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import "./embla.css";
import Image from "next/image";
import DemoImg from "../../../assets/images/img-1.jpeg";
import DxmoImg from "../../../assets/images/img-2.jpeg";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={`/images/img-${index}.jpeg`}
                alt="img"
                width={1000}
                height={1000}
                className="imgg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
