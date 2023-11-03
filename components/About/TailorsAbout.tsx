"use client";

import { tailorsAbout } from "@/public/data";
import { TailoredCard } from "..";

export const TailorsAbout = () => (
  <div className="mt-[50px] md:mt-[61px] mb-[50px] md:mb-[117px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 max-w-[854px]">
    {tailorsAbout.map(({ img, title, des }, i) => (
      <TailoredCard key={i} img={img} title={title} des={des} width="md" />
    ))}
  </div>
);
