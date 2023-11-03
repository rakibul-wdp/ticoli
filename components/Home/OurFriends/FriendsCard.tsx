"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { IFriend } from "@/interface";
import { PlayButton } from "./PlayButton";
import { RattingCard } from "./RattingCard";

export const FriendsCard = ({
  img,
  bgImage,
  minWidth,
  position,
  minHeight,
  className,
  bgPosition,
  playButton,
  rattingCard,
}: IFriend) => (
  <section
    className={twMerge(
      `absolute z-20 rounded-[20px] ${minWidth} ${minHeight} ${position}`,
      className
    )}
  >
    <div className="relative flex justify-center items-center w-full">
      <Image src={bgImage} className={`absolute ${bgPosition} z-0`} alt="" />

      <Image src={img} className={`absolute top-0 z-10 ${minWidth}`} alt="" />

      {playButton && <PlayButton className="-bottom-[237px]" />}

      {rattingCard && (
        <RattingCard
          ratting={5}
          title="Rene Braun"
          className="absolute z-20 -mb-[56rem]"
          des="It's engaging, fun, and motivates them to read more. Their enthusiasm for reading has grown, and so has their vocabulary and comprehension. As a dad, I couldn't be happier. Highly recommended!"
        />
      )}
    </div>
  </section>
);
