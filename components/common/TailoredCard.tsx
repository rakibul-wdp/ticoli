"use client";

import Image from "next/image";

import { ITailored } from "@/interface";
import { CommonText, Title } from "@/universal";

export const TailoredCard = ({ img, title, des, width = "sm" }: ITailored) => (
  <section
    className={`w-[90%] max-w-[327px] md:w-full ${
      (width === "sm" && "md:max-w-[220px]") ||
      (width === "md" && "md:max-w-[252px] w-full min-h-[184px]")
    } flex flex-col justify-start items-center gap-2`}
  >
    <Image src={img} alt="" />
    <Title variant="H5" className="text-center">
      {title}
    </Title>
    <CommonText className="text-center text-[16px]">{des}</CommonText>
  </section>
);
