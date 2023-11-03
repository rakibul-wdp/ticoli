"use client";

import { twMerge } from "tailwind-merge";

import { IChildrenWithClassName } from "@/interface";

export const Container = ({ children, className }: IChildrenWithClassName) => (
  <main
    className={twMerge(
      `container w-[95%] lg:w-[99%] xl:w-full max-w-[1024px] mx-auto`,
      className
    )}
  >
    {children}
  </main>
);
