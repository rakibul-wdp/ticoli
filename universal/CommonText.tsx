"use client";

import { twMerge } from "tailwind-merge";

import { ICommonText } from "@/interface";
import { findFontFamily, findFontWeight } from ".";

export const CommonText = ({
  children,
  className,
  fontWeight = "400",
  text = "common",
  fontFamily = "source-sans",
}: ICommonText) => {
  const weight = findFontWeight(fontWeight);
  const family = findFontFamily(fontFamily);

  const textSize =
    text === "common"
      ? "text-sm lg:text-base" // text-[14px] lg:text-[16px]
      : "text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]";

  return (
    <p
      className={twMerge(
        `text-high-contrast  ${textSize} ${weight} ${family}`,
        className
      )}
    >
      {children}
    </p>
  );
};
