"use client";

import { twMerge } from "tailwind-merge";

import { ILabel } from "@/interface";
import { findFontFamily, findFontWeight, findTextColor } from "./constant";

export const Label = ({
  children,
  className,
  color = "surface-accent-sunken",
  fontWeight = "500",
  uppercase,
  fontFamily = "lato",
}: ILabel) => {
  const textColor = findTextColor(color);
  const weight = findFontWeight(fontWeight);
  const family = findFontFamily(fontFamily);

  return (
    <span
      className={twMerge(
        `tracking-[2px] text-[12px] md:text-[14px] leading-[22px] md:leading-[18px] text-center ${textColor} ${weight} ${family} ${
          uppercase && "uppercase"
        }`,
        className
      )}
    >
      {children}
    </span>
  );
};
