"use client";

import { twMerge } from "tailwind-merge";

import { IClassName } from "@/interface";

export const PlayButton = ({ className }: IClassName) => (
  <div className={twMerge("absolute", className)}>
    <div className="video-play-button ">
      <span></span>
    </div>
  </div>
);
