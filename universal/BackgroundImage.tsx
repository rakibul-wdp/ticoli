"use client";

import { IBackgroundImage } from "@/interface";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const BackgroundImg = ({
  children,
  img,
  mobImg,
  className,
  hidden,
  topLabel,
  lowerBg,
  mobLowerBg,
  lowerBgMt = "140",
}: IBackgroundImage) => {
  const bgHidden =
    (hidden === "sm" && "md:inset-0") ||
    (hidden === "md" && "lg:inset-0") ||
    (hidden === "lg" && "xl:inset-0") ||
    (!hidden && "inset-0");

  return (
    <main className={twMerge(`relative w-full`, className)}>
      <div className={`absolute w-full ${topLabel && "z-10"} ${bgHidden}`}>
        {lowerBg && (
          <>
            <Image
              src={lowerBg}
              className={` w-full absolute -z-50 ${
                lowerBg && !mobLowerBg && "hidden md:block"
              } ${
                mobLowerBg && "min-w-[561px] -ml-[25%] sm:-ml-0"
              } ${lowerBgMt}`}
              alt="background image"
              fill
            />
            {mobLowerBg && (
              <Image
                src={mobLowerBg}
                className={`w-full absolute -z-50 ${
                  mobLowerBg && "block md:hidden"
                } ${
                  mobLowerBg && "min-w-[561px] -ml-[25%] sm:-ml-0"
                } ${lowerBgMt}`}
                alt="background image"
                fill
              />
            )}
          </>
        )}
        {mobImg && (
          <Image
            src={mobImg}
            className="w-full md:hidden"
            alt="background image"
            fill
          />
        )}
        <Image
          src={img}
          className={`w-full ${mobImg && "hidden md:block"}`}
          alt="background image"
          fill
        />
      </div>

      <section className="relative z-10">{children}</section>
    </main>
  );
};
