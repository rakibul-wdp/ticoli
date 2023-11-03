"use client";
import { ISpace } from "@/interface";
import { twMerge } from "tailwind-merge";

export const Space = ({ className, topSpace }: ISpace) => (
  <div
    className={twMerge(`${topSpace && "h-[72px] lg:h-[100px]"}`, className)}
  />
);
