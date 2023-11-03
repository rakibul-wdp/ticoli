"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { IAbsoluteImg } from "@/interface";

export const AbsoluteImg = ({
  img,
  className,
  alt,
  width,
  zIndex = "z-0",
}: IAbsoluteImg) => (
  <section
    className={twMerge(`absolute ${width || "w-auto"} ${zIndex}`, className)}
  >
    <Image src={img} className="inset-0" alt={alt || "absolute img"} />
  </section>
);
