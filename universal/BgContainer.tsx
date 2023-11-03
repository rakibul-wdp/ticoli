"use client";

import { IBgContainer } from "@/interface";
import { twMerge } from "tailwind-merge";
import { BackgroundImg } from "./BackgroundImage";

export const BgContainer = ({
  children,
  className,
  img,
  hidden,
  mobImg,
  topLabel,
}: IBgContainer) => (
  <main
    className={twMerge(
      `container w-full md:w-[95%] lg:w-[99%] xl:w-full max-w-[1024px] mx-auto`,
      className
    )}
  >
    <BackgroundImg
      img={img}
      mobImg={mobImg}
      topLabel={topLabel}
      hidden={hidden}
      className="md:rounded-3xl md:overflow-hidden mt-12 md:mt-[72px]mx-10"
    >
      {children}
    </BackgroundImg>
  </main>
);
