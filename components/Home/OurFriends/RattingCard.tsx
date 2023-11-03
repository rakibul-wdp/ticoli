"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { IRattingCard } from "@/interface";
import { star } from "@/public/assets/images";
import { CommonText } from "@/universal";

export const RattingCard = ({
  mob,
  des,
  title,
  length,
  ratting,
  className,
  currentIndex,
}: IRattingCard) => (
  <section
    className={twMerge(
      "rounded-xl bg-[#fafaf9] w-[347px] md:w-[291px] h-auto min-h-[326px] shadow-[0px 2px 24px 0px #1c191714]",
      className
    )}
  >
    <div className="py-8 px-4  flex flex-col justify-center items-center gap-5">
      <h6 className="text-high-contrast text-center font-sora text-[20px] leading-[24px] font-extrabold">
        {title}
      </h6>

      {mob && (
        <div className="flex justify-center items-center gap-1 mt-1">
          {Array.from(Array(ratting).keys()).map((el) => (
            <Image key={el} src={star} alt="" />
          ))}
          {ratting < 5 &&
            Array.from(Array(5 - ratting).keys()).map((el) => (
              <Image key={el} className="opacity-50" src={star} alt="" />
            ))}
        </div>
      )}

      <CommonText
        className="text-center font-lato text-[#0F0E12] opacity-50"
        text="sub"
      >
        {des}
      </CommonText>

      {!mob && (
        <div className="flex justify-center items-center gap-1 mt-1">
          {Array.from(Array(ratting).keys()).map((el) => (
            <Image key={el} src={star} alt="" />
          ))}
          {ratting < 5 &&
            Array.from(Array(5 - ratting).keys()).map((el) => (
              <Image key={el} className="opacity-50" src={star} alt="" />
            ))}
        </div>
      )}

      {mob && (
        <div className="flex justify-center items-center gap-4 pt-8">
          {Array.from(Array(length).keys()).map((el) => (
            <div
              key={el}
              className={`w-12 h-3 rounded-full ${
                currentIndex === el ? "bg-surface-accent" : "bg-default-borders"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  </section>
);
