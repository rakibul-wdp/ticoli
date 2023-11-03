"use client";

import { twMerge } from "tailwind-merge";

import { ICTA } from "@/interface";

export const CTA = ({ children }: ICTA) => (
  <p
    className={twMerge(
      "text-high-contrast font-extrabold text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px]"
    )}
  >
    {children}
  </p>
);
