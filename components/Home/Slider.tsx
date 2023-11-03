"use client";

import Image from "next/image";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Autoplay } from "swiper/modules";

import { sliderData } from "@/public/data";

export const Slider = () => {
  const slider = sliderData;
  const [preIndex, setPreIndex] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(2);

  // current carousel
  const currentCarousel = slider.find((slide) => slide.id === sliderIndex);

  const setIndex = (index: number) => {
    setSliderIndex(index === slider.length - 1 ? 0 : index + 1);
  };

  const width = (id: number) =>
    currentCarousel?.id === id ? "min-w-[308px]" : "w-[260px]";
  const height = (id: number) =>
    currentCarousel?.id === id ? "h-[622.774px]" : "h-[525.718px]";

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      // loop={true}
      onSlideChange={({ realIndex }) => setIndex(realIndex)}
      // autoplay={{
      //   delay: 4000,
      // }}
      breakpoints={{
        640: {
          spaceBetween: 15,
        },
        768: {
          spaceBetween: 20,
        },
        1200: {
          spaceBetween: 40,
        },
      }}
      // Autoplay
      // modules={[]}
      className="static"
    >
      {slider.map(({ imageURL, id }) => (
        <SwiperSlide key={id} className={`my-auto mx-auto w-auto`}>
          <Image
            className={`${width(id) + " " + height(id)} ${
              // slider -> 1
              currentCarousel?.id === (id + 1 === 6 ? 0 : id + 1) &&
              "ml-[17%] sm:ml-[11%] md:ml-[10%] lg:ml-[8%] xl:ml-[5%]"
            } ${
              // slider -> 3
              currentCarousel?.id === (id - 1 === -1 ? 5 : id - 1) &&
              "sm:ml-2.5 md:ml-[20px] lg:ml-[22px]"
            }`}
            src={imageURL}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
