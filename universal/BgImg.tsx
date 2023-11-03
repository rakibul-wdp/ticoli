"use client";

import { IChildrenWithClassName } from "@/interface";
import { mobHeroBg, mobSubHeroBg } from "@/public/assets/images";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export interface IBgImg extends IChildrenWithClassName {
  img: StaticImageData;
  mobImg?: StaticImageData;
  lowerBg?: JSX.Element;
  hero?: boolean;
}

export const BgImg = ({
  img,
  hero,
  mobImg,
  lowerBg,
  children,
  className,
}: IBgImg) => (
  <main className={twMerge(`relative w-full`, className)}>
    <div className={`absolute w-full inset-0 ${lowerBg && "-z-50"}`}>
      <Image
        src={img}
        className={`w-full ${mobImg || (hero && "hidden md:block")}`}
        alt="background image"
        fill
      />
      {mobImg && (
        <Image
          src={mobImg}
          className="w-full block md:hidden"
          alt="background image"
          fill
        />
      )}

      {lowerBg ? (
        <Image
          src={mobSubHeroBg}
          className="w-full block md:hidden"
          alt="background image"
          fill
        />
      ) : (
        hero && (
          <Image
            src={mobHeroBg}
            className="w-full block md:hidden"
            alt="background image"
            fill
          />
        )
      )}
    </div>

    <section className="relative z-10">
      {children}
      {lowerBg || null}
    </section>
  </main>
);
