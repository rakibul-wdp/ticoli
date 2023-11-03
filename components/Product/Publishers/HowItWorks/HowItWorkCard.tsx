"use client";

import Image from "next/image";

import { ITailored } from "@/interface";
import { CommonText, Title } from "@/universal";

export const HowItWorkCard = ({ img, title, des }: ITailored) => (
  <section className="w-[90%] md:max-w-[220px] flex flex-col justify-center items-center gap-2">
    <Image src={img} alt="" />
    <Title variant="H5">{title}</Title>
    <CommonText className="text-center" text="sub">
      {des}
    </CommonText>
  </section>
);
